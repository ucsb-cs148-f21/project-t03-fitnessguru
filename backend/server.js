const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Load config
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use('/user', require('./config/routes/user'))
app.use('/exercises', require('./config/routes/exercise'))
app.use('/workouts', require('./config/routes/workout'))
app.use('/splits', require('./config/routes/split'))

app.listen(
    PORT, 
    console.log(`Server running on port ${PORT}`)
)