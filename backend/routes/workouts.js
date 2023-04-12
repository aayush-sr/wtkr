const express = require('express')

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

router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete a single workout'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'update a single workout'})
})



module.exports = router