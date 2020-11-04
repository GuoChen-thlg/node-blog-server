const db = require('../config/db')
const express = require('express')
const router = express.Router()

// const addPost = require('./addPost')
// const Post = require('./queryPost')
// const siteInit = require('./siteinit')
// const queryCategory = require('./categoryList')
// const queryTagsList = require('./tagsList')
// const queryPostList = require('./postList')

const { siteHeadImg, siteBackImg, authorHeadImg } = require('./upload')

router.post('/addPost', require('./addPost'))
router.get('/queryPost', require('./queryPost')) //
router.post('/updatePost',require('./updatePost'))
router.post('/updateArrtPost', require('./updateArrtPost'))
router.post('/deletePost',require('./deletdPost'))

router.get('/siteInit', require('./siteinit'))
router.post('/upsite', require('./upsite'))

router.get('/categorylist', require('./categoryList')) //
router.get('/category', require('./category')) //

router.get('/tagslist', require('./tagsList')) //
router.get('/tag', require('./tags')) //

router.get('/postlist', require('./postList'))

router.post('/upload/siteHeadImg', siteHeadImg)
router.post('/upload/siteBackImg', siteBackImg)
router.post('/upload/authorHeadImg', authorHeadImg)

router.post('/search',require('./search'))





module.exports = router
