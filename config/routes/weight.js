const express = require("express");
const router = express.Router();

const Weight = require("../../models/Weight");

// Get
router.get("/:repetitionsId", async (req, res) => {
    const weight = await Weight.find({ repetitions: req.params.repetitionsId });
    res.send(weight);
});

// Post
router.post("/", async (req, res) => {
    await Weight.create(req.body);
    res.redirect("back");
});

// Put
router.post("/put/:id", async (req, res) => {
    await Weight.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.redirect("back");
});

// Delete
router.post("/delete/:id", async (req, res) => {
    await Weight.findOneAndDelete({ _id: req.params.id });
    res.redirect("back");
});

module.exports = router;
