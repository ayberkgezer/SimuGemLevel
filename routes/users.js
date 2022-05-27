const express = require('express')
const router = express.Router()
const User = require('../models/user')
const session = require('express-session')


router.get('/register', (req, res) => {
    res.render('site/register')
})

router.post('/register', (req, res) => {
    User.create(req.body, (error, user) => {
        res.redirect('/')
    })
})

router.get('/login', (req, res) => {
    res.render('site/login')
})

router.post('/login', (req, res) => {
    const {username, password} = req.body

    User.findOne({username}, (error, user) => {
        if(user){
            if(user.password == password){
                return res.redirect('/')
            }else{
                return res.redirect('/users/login')
            }
        }else{
            return res.redirect('/users/register')
        }
    })
})

module.exports = router