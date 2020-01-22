const express = require('express');
const router = express.Router();
const User = require('./../models/userModels.js')



router.get('/users' , async (req, res, next) =>{
    res.json({
       users: await User.getUsers() 
    })
})

module.exports = router;