const mongoose = require('mongoose');

const userschema = new mongoose.Schema({

    name: {
        type: String,
        requiredd: true,
        minlength: 3,
        maxlength: 20,
        trim: true
        
    },

    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    }, 

    phone_number: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/
    },

    address: {
        building: {
            type: String,
            required: true,
            trim: true
        },

        line1: {
            type: String,
            required: true,
            trim: true
        },

        line2: {
            type: String,
            required: false,
            trim: true
        },

        landmark: {
            type: String,
            required: true,
            trim: true
        },

        pincode: {
            type: String,
            required: true,
            match: /^[0-9]{6}$/
        }
    }

});

module.exports = mongoose.model('User', userschema);

