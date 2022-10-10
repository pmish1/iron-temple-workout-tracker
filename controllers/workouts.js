const express = require('express')


const router = express.Router()
const Workouts = require('../models/workouts')
const Exercises = require('../models/exercises')

//INDEX--------------------------------------------
router.get('/workout-tracker', async (req, res) => {
    const workouts = await Workouts.find()
    console.log(workouts)
    res.render('index.ejs', {
        workouts: workouts
    } )
})


//NEW-------------------------------------------
router.get('/workout-tracker/new', (req, res) => {
    res.render('new.ejs')
})
router.post('/workout-tracker', async (req, res) => {
    console.log(req.body)
    await Workouts.create(req.body)
    res.redirect('/workout-tracker')
})


//DELETE----------------------------------------
router.get('/workout-tracker/:id/delete', async (req, res) => {
    const ID = req.params.id
    res.render('delete.ejs', {
        workoutID: ID
    })
})
router.delete('/workout-tracker/:idFromDelete', async (req, res) => {
    const deletedWorkout = await Workouts.findByIdAndRemove(req.params.idFromDelete)
    res.redirect('/workout-tracker')
})



//SHOW------------------------------------------
router.get('/workout-tracker/:idFromIndex', async (req, res) => {
    const workout = await Workouts.findById(req.params.idFromIndex)
    res.render('show.ejs', {
        workout: workout
    })
})

module.exports = router













