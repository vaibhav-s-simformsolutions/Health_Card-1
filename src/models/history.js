const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');

const PrescripationSchema = new Schema({
        disease:{
            type : String,
            required : true,
        },
        prescripation: [{
            medicine: String,
            timedose: String,
            quantity: Number,
        }],
        doctorid: String,
        lab: {
            reportname: String,
        },
}, {
    timestamps: true
})

const HistorySchema = new Schema({
    healthid:{
        type : String,
        required  :true,
        ref : 'Patient',
    },
    history: [
        {type : PrescripationSchema},
    ]
}, {
    timestamps: true
})


const History = mongoose.model('history', HistorySchema);
const Prescripation = mongoose.model('prescripation', PrescripationSchema)
module.exports = {
    History,
};