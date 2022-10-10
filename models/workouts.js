const mongoose = require('mongoose')

const Exercises = require('./exercises')


const workoutSchema = new mongoose.Schema({
    name: String,
    //exercises: { type: [mongoose.Schema.Types.ObjectId], ref: 'Exercises' },
    exercises: {type: String, require: true}
    },
    //{timestamps: true}
)

const Workouts = mongoose.model('Workouts', workoutSchema)


module.exports = Workouts









