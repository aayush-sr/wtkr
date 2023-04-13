const express = require('express')
const Workout = require('../models/workoutModels')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workout'})
})

router.post('/:id', (req, res) => {
    res.json({mssg: 'post a single workout'})
})

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body;
    try {
        //create a new workout
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete a single workout'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'update a single workout'})
})



module.exports = router