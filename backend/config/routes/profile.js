const express = require('express')
const router = express.Router()

const prof = require('../../models/User')

// Get
router.get('/Profile/:googleId', async (req, res) => {
    const pr = await prof.find({googleId : req.params.googleId})
    res.send(pr)
})

/*
router.post('/Profile/put/:googleId', async (req, res) => {
    await prof.findOneAndUpdate({pic: req.params.pic}, req.body)
    res.redirect('back')
})
*/