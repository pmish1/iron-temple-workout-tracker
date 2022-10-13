const mongoose = require('mongoose')


const exerciseSchema = new mongoose.Schema({
    exerciseName: {type: String, required: true},
    sets: [
        {
            reps: Number,
            weight: Number
        }
    ]
    
})

const Exercises = mongoose.model('Exercises', exerciseSchema)


module.exports = Exercises 

// sets: [
//     { reps: 1, weight: 1 },
//     { reps: 2, weight: 2 },
//     { reps: 3, weight: 3 },
//   ]