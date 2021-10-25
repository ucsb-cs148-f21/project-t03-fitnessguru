const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: false
    },
    dateOfBirth: {
        type: String,
        required: false
    },
    heightFeet: {
        type: Number,
        required: false
    },
    heightInches: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)