const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        require: false,
    },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
