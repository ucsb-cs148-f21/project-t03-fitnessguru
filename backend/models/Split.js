const mongoose = require("mongoose");

const SplitSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    workouts: {
        type: Array,
        required: false
    },
    notes:{
        type: String,
        require: false
    }
})

module.exports = mongoose.model("Split", SplitSchema);