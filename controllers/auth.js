const express = require('express')
const passport = require('passport')

const User = require('../models/users')

const router = express.Router()

//LOGIN ------------------------------
router.get('/login', (req, res) => {
    res.render('login.ejs')
})
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/workout-tracker',
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