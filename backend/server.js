require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())
app.use('/api/workouts', workoutRoutes)

//DB CONNECTION

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
        console.log('MongoDB connected!')
        app.listen(process.env.PORT, () => {
            console.log(`App running on port ${process.env.PORT}!`)
        })
    })
    .catch(err => {
        console.log(err)
    })
 
