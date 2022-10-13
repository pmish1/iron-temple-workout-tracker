const mongoose = require('mongoose')

const Exercises = require('./exercises')


const workoutSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    exercises: [{type: Object}]
})

const Workouts = mongoose.model('Workouts', workoutSchema)


module.exports = Workouts









