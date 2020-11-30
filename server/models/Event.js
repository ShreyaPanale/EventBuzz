const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName : String,
    clubName : String,
    description : String,
    startDate : Date,
    endDate : Date,
    formLink : String
});

module.exports = mongoose.model('Event',eventSchema, 'eventsCollection')