const express = require("express");
const router = express.Router();

const Split = require("../../models/Split");

// Get
router.get('/:googleId', async (req, res) => {
    const splits = await Split.find({googleId: req.params.googleId})
    res.send(splits)
})

// Post
router.post('/', async (req, res) => {
    result = await Split.create(req.body)
    res.redirect('back')
})

// Put
router.post('/put/:id', async (req,res) => {
    await Split.findOneAndDelete({_id: req.params.id})
    res.redirect('back')
})

// Delete
router.post('/delete/:id', async (req,res) => {
    await Split.findOneAndDelete({_id: req.params.id})
    res.redirect('back')
})

module.exports = router;