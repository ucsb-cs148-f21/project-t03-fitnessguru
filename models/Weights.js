const mongoose = require("mongoose");

const WeightsSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    repetitions: {
        type: Array,
        required: false,
    },
});

module.exports = mongoose.model("Weights", WeightsSchema);