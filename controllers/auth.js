const express = require('express')
const passport = require('passport')

const User = require('../models/users')

const router = express.Router()

//LOGIN ------------------------------
router.get('/login', (req, res) => {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        res.redirect('back')
    } else {
        res.render('login.ejs')
    }
})
//'local' means the username and password stored in our database. tells passport where to look for authentication data
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',   //if password wrong, redirect to this page
    successRedirect: '/workout-tracker', //otherwise redirect them to this page
}))

//LOGOUT-----------------------------
router.post('/logout', async (req, res) => {
    req.logout(() => {    //it will logout whatever user is logged in
        res.redirect('/')
    })
} )


//REGISTER--------------------------
router.get('/register', (req, res) => {
    res.render('register.ejs')
})
router.post('/register', async (req, res) => {
    const {username, password} = req.body
    const user = await User.register(
        new User({username: username}),
        password
    )
    req.login(user, () => {
        res.redirect('/workout-tracker')
    })
})

module.exports = router