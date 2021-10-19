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
        type: Number,
        required: false
    },
    repetitions: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    notes:{
        type: String,
        require: false
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)