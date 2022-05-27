const express = require('express')
const router = express.Router()
var Post = require('../models/post')
var Gemxp = require('../models/gemxp')
const session = require('express-session')

router.get('/', (req, res) => {
    Post.find({}).lean().then(posts =>{
        res.render('site/index', {posts: posts})
    })
})

router.get('/gemslevel', (req, res) => {
    Gemxp.find({}).lean().then(gemxps =>{
    res.render('site/gemslevel', {gemxps: gemxps})
    })
})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

router.get('/search', function(req, res) {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi')
        Post.find({"name" : regex}).lean().then(posts =>{
            res.render('site/index', {posts: posts})
        })
     }
})



router.get('/gemslevel/search', function(req, res) {
    if (req.query.gemslevel){
        const regex = new RegExp(escapeRegex(req.query.gemslevel), 'gi')
        Gemxp.find({"names" : regex}).lean().then(gemxps =>{
            res.render('site/gemslevel', {gemxps: gemxps})
        })
    }
})

router.get('/favorites/search', function(req, res) {
    if(req.query.gems) {
        const regex = new RegExp(escapeRegex(req.query.gems), 'gi')
        Post.find({"name" : regex}).lean().then(posts =>{
            res.render('site/favorites', {posts: posts})
        })
    }
})


router.get('/directory', (req, res) => {
    res.render('site/directory')
})

router.get('/favorites', (req, res) => {
    res.render('site/favorites')
})

router.get('/yourrun', (req, res) => {
    res.render('site/yourrun')
})

module.exports = router