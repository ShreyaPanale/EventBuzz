const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require('../models/Event');

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
router.get('/Events',function(req,res){
    console.log('GET req for all events');
    Event.find({})
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
router.get('/Events/:id',function(req,res){
    console.log('GET req for single event');
    Event.findById(req.params.id)
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
router.post('/Event',function(req,res){
    console.log("Post an event");
    var newEvent = new Event();
    newEvent.eventName = req.body.eventName;
    newEvent.clubName = req.body.clubName;
    newEvent.description = req.body.description;
    newEvent.startDate = req.body.startDate;
    newEvent.endDate = req.body.endDate;
    newEvent.formLink = req.body.formLink;
    newEvent.save(function(err,insertedEvent){
        if(err){
            console.log("Error saving event");
        }
        else{
            res.json(insertedEvent);
        }
    });
    
});

//UPDATE - PUT method
router.put('/Event/:id',function(req,res){
    console.log("Update event");
    //findByIdAndUpdate
    //first arg -> id
    //second arg -> set of new/updated values for event
    Event.findByIdAndUpdate(req.params.id,
    {
        $set: {event : req.body.eventName,
            clubName: req.body.Name,
            description : req.body.description,
            startDate : req.body.startDate,
            endDate : req.body.endDate,
            formLink : req.body.formLink}
    },
    {
        new: true
    },
    function(err,updatedEvent){
        if(err){
            res.send("Error updating event");
        }
        else{
            res.json(updatedEvent);
        }
    }
    );
});

//DELETE method
router.delete('/Event/:id',function(req,res){
    console.log("Deleting an event");
    Event.findByIdAndDelete(req.params.id, function(err,deletedEvent){
        if(err){
            res.send("Error deleting Event");
        }
        else{
            res.json(deletedEvent);
        }
    });
});

//export the router
module.exports = router;