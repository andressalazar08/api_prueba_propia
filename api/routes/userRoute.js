const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js');


router.get('/allUsers', userController.getAllUsers)




module.exports = router