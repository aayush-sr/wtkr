const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    // schema for a workout
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

// model for a workout

module.exports = mongoose.model('Workout', workoutSchema)