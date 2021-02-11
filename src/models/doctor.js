const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const validator = require('validator');
const validate = require('validator');

const DoctorsSchema = new Schema({
    doctorid: {
        type: String,
        required: true,
    },
    ownerdetails: {
        fname: {
            type: String,
            required: true,
        },
        mname: String,
        lname: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        dob: String,
        //TODO :type change to DOB
        licenseNumber: {
            type: String,
            unique: true,
            required: true
        },
        license: String
    },
    password: {
        type: String,
        required: true
    },
    contacts: {
        mobile: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
            },
        },
    },
    address: {
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        pincode: {
            type: Number,
            required: true,
        },
    },
    doctorDetails: {
        degree: String,
        speciality: [
            {
                type:String,
            }
        ],
    },
    hospitalContacts: {
        hospitalname: String,
        hospitalmobile: {
            type: Number,
            required: true
        }
    },
    approved: Boolean,
    token: {
        type: String,
    },
    // date: Date,

}, {
    timestamps: true
})

const Doctor = mongoose.model('doctor', DoctorsSchema);
module.exports = Doctor;