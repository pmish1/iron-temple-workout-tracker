require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const mongoDBSession = require('connect-mongodb-session')
const flash = require('express-flash')




const Workouts = require('./models/workouts')
const Exercises = require('./models/exercises')
const workoutsController = require('./controllers/workouts')

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const MongoDBWorkouts = mongoDBSession(session)
const sessionWorkouts = new MongoDBWorkouts({
    uri: dbURL,
    collection: 'sessions'
})


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // https://expressjs.com/en/resources/middleware/session.html#resave
    saveUninitialized: false, // https://expressjs.com/en/resources/middleware/session.html#saveuninitialized
    store: sessionWorkouts
  })
)



app.use(workoutsController)


mongoose.connect(dbURL, () => {
    console.log('connected to Workouts database')
})


app.listen(PORT, () => {
    console.log('listening on port', PORT)
})