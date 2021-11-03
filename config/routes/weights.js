const express = require("express");
const router = express.Router();

const Weights = require("../../models/Weights");

// Get
router.get("/:googleId", async (req, res) => {
    const weights = await Weights.find({ googleId: req.params.googleId });
    res.send(weights);
});

// Post
router.post("/", async (req, res) => {
    await Weights.create(req.body);
    res.redirect("back");
});

// Put
router.post("/put/:id", async (req, res) => {
    await Weights.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.redirect("back");
});

// Delete
router.post("/delete/:id", async (req, res) => {
    await Weights.findOneAndDelete({ _id: req.params.id });
    res.redirect("back");
});

module.exports = router;
