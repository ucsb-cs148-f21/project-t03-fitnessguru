const express = require('express')
const router = express.Router()

const Exercise = require('../../models/Exercise')

router.get('/', async (req, res) => {
    const exercises = await Exercise.find()
    res.send(exercises)
})

router.post('/', async (req, res) => {
    result = await Exercise.create(req.body)
    res.send(result)
})

module.exports = router