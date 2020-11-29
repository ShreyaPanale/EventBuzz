const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const clubEvent = require('../models/clubEvent');

const db = "mongodb+srv://admin:admin@eventscluster.mykis.mongodb.net/eventsDB?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error!"+err);
    }
});
//GET method
//GET all
//first arg -> path
//second arg -> req handling fn
router.get('/clubEvents',function(req,res){
    console.log('GET req for all events');
    clubEvent.find({})
    .exec(function(err,events){
        if(err){
            console.log("Error retrieving events");
        }
        else{
            res.json(events);
        }
    });
});
//Using ID
router.get('/clubEvents/:id',function(req,res){
    console.log('GET req for single event');
    clubEvent.findById(req.params.id)
    .exec(function(err,event){
        if(err){
            console.log("Error retrieving events");
        }
        else{
            res.json(event);
        }
    });
});

//POST method
router.post('/clubEvent',function(req,res){
    console.log("Post an event");
    var newclubEvent = new clubEvent();
    newclubEvent.eventName = req.body.eventName;
    newclubEvent.clubName = req.body.clubName;
    newclubEvent.description = req.body.description;
    newclubEvent.startDate = req.body.startDate;
    newclubEvent.endDate = req.body.endDate;
    newclubEvent.formLink = req.body.formLink;
    newclubEvent.save(function(err,insertedEvent){
        if(err){
            console.log("Error saving event");
        }
        else{
            res.json(insertedEvent);
        }
    });
    
});

//UPDATE - PUT method
router.put('/clubEvent/:id',function(req,res){
    console.log("Update event");
    //findByIdAndUpdate
    //first arg -> id
    //second arg -> set of new/updated values for event
    clubEvent.findByIdAndUpdate(req.params.id,
    {
        $set: {eventName : req.body.eventName,
            clubName: req.body.clubName,
            description : req.body.description,
            startDate : req.body.startDate,
            endDate : req.body.endDate,
            formLink : req.body.formLink}
    },
    {
        new: true
    },
    function(err,updatedclubEvent){
        if(err){
            res.send("Error updating event");
        }
        else{
            res.json(updatedclubEvent);
        }
    }
    );
});

//DELETE method
router.delete('/clubEvent/:id',function(req,res){
    console.log("Deleting an event");
    clubEvent.findByIdAndDelete(req.params.id, function(err,deletedclubEvent){
        if(err){
            res.send("Error deleting Event");
        }
        else{
            res.json(deletedclubEvent);
        }
    });
});

//export the router
module.exports = router;