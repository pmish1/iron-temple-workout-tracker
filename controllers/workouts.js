const express = require('express')
const mongoose = require('mongoose')
var ObjectId = require('mongoose').Types.ObjectId;
const EventEmitter = require('events')
const ensureLogin = require('connect-ensure-login')  //lets you create new middleware


const router = express.Router()
const Workouts = require('../models/workouts')
const Exercises = require('../models/exercises')
const emitter = new EventEmitter()  //this is an object


router.use(ensureLogin.ensureLoggedIn())


//INDEX--------------------------------------------
router.get('/workout-tracker', async (req, res) => {
    
    const workouts = await Workouts.find()
    console.log(workouts)
    res.render('index.ejs', {
        workouts: workouts
    } )
})

//CREATE WORKOUT ROUTE----------------------------------
router.post('/workout-tracker/createWorkout', async (req, res) => {
    
    const createWorkout = await Workouts.create(req.body) //creates the workout model upon clicking 'start workout'
    const workoutID = createWorkout._id
    res.redirect(`/workout-tracker/${workoutID}`) //redirects you to the current workout route
})

//CURRENT WORKOUT ROUTE------------------------------
router.get('/workout-tracker/:idFromCreate', async (req, res) => {
    const workout = await Workouts.findById(req.params.idFromCreate)
    res.render('currentWorkout.ejs', {
        workout: workout,
        workoutID: req.params.idFromCreate
    })
})
router.post('/workout-tracker/:idFromCurrent/currentPost', (req, res) => {
    req.flash('success', 'You completed your workout, well done!!')
    res.redirect('/workout-tracker')
})


//ADD EXERCISE TO WORKOUT------------------------------
router.get('/workout-tracker/:idFromNew/new-exercise', async (req, res) => {
    res.render('newExercises.ejs', {
        ID: req.params.idFromNew
    })
})
router.post('/workout-tracker/:idFromNewExercises/exercisePost', async (req, res) => {
    const ID = req.params.idFromNewExercises
    let sets = []
    for (let i = 0; i < req.body.reps.length; i++) {
        let obj = {}
        obj.reps = req.body.reps[i]
        obj.weight = req.body.weight[i]
        sets.push(obj)
    }
    const newExercise = {
        exerciseName: req.body.exerciseName,
        sets: sets
    }
    const insertExercise = await Exercises.create(newExercise)
    const workoutsUpdated = await Workouts.findByIdAndUpdate( 
        ID, 
        {$push: {exercises: insertExercise}}, 
        {new: true}
    )
    res.redirect(`/workout-tracker/${ID}`)  //redirects to CURRENT WORKOUT ROUTE
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



//SHOW COMPLETED WORKOUT------------------------------------------
router.get('/workout-tracker/:idFromIndex/view', async (req, res) => {
    const workout = await Workouts.findById(req.params.idFromIndex)
    res.render('show.ejs', {
        workout: workout
    })
})

module.exports = router













