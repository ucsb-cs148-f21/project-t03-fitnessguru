const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const user = require("./testapi/user")
const userInfo = require("./routes/userInfo");
const {notFound, errorHandler} = require("./middlewares/errorMiddleWare");
// Load config
dotenv.config({path: './config/config.env'})
connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/api/users',userInfo)
const PORT = process.env.PORT || 5000

app.use('/exercises', require('./config/routes/exercise'))
app.use('/workouts', require('./config/routes/workout'))
app.use('/splits', require('./config/routes/split'))
app.use(notFound);
app.use(errorHandler);
app.listen(
    PORT, 
    console.log(`Server running on port ${PORT}`)
)