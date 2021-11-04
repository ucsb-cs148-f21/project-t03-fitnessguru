const express = require("express");
const router = express.Router();

const Repetitions = require("../../models/Repetitions");

// Get
router.get("/:weightsId", async (req, res) => {
    const repetitions = await Repetitions.find({ weights: req.params.weightsId });
    res.send(repetitions);
});

// Post
router.post("/", async (req, res) => {
    await Repetitions.create(req.body);
    res.redirect("back");
});

// Put
router.post("/put/:id", async (req, res) => {
    await Repetitions.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.redirect("back");
});

// Delete
router.post("/delete/:id", async (req, res) => {
    await Repetitions.findOneAndDelete({ _id: req.params.id });
    res.redirect("back");
});

module.exports = router;
