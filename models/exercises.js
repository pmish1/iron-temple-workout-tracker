const mongoose = require('mongoose')


const exerciseSchema = new mongoose.Schema({
    exerciseName: {type: String, required: true},
    sets: {type: Number, required: true},
    reps: {type: Number, required: true}
})

const Exercises = mongoose.model('Exercises', exerciseSchema)


module.exports = Exercises 