const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    },
    name: {
        type: String,
        required: true
    },
    sets: {
        type: Integer,
        required: false
    },
    repetitions: {
        type: Integer,
        required: false
    },
    weight: {
        type: Integer,
        required: false
    },
    notes:{
        type: String,
        require: false
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)