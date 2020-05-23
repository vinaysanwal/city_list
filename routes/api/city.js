const express = require('express');
const router = express.Router();
const { check , validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const data = require('../../file/cities.json');

//get_city_list
//GET

router.get('/' , async (req, res) => {
    try {
       res.send(data);
    } catch(err){
       console.error(err.message);
       res.status(500).send('Server Error');
    }
});





module.exports = router;
