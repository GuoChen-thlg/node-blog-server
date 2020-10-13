const db = require('../config/db')
const express = require('express')
const router = express.Router()

// const addPost = require('./addPost')
// const Post = require('./queryPost')
// const siteInit = require('./siteinit')
// const queryCategory = require('./categoryList')
// const queryTagsList = require('./tagsList')
// const queryPostList = require('./postList')
router.post('/addPost', require('./addPost'))

router.get('/queryPost', require('./queryPost'))//

router.get('/siteInit', require('./siteinit'))

router.get('/categorylist', require('./categoryList'))//
router.get('/category', require('./category'))//

router.get('/tagslist', require('./tagsList'))//
router.get('/tag', require('./tags'))//

router.get('/postlist', require('./postList'))

module.exports = router
