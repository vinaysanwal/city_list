const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/Users');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check , validationResult} = require('express-validator');




// @route GET api/auth
// @desc Test Route
// @access Public 

router.get('/', auth , async (req, res) => {
    try {
       const user = await User.findById(req.user.id).select('-password');
       user1 = [user]
       res.json(user1);
    } catch(err){
       console.error(err.message);
       res.status(500).send('Server Error');
    }
});





// @route POST api/auth
// @desc  Authenticate user and get token
// @access Public 

router.post('/',[
   check('email', 'email is required').isEmail(),
   check('password', 'Password is Required').exists()
],
async (req, res) => {
  console.log(req.body)
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array() });
   }

   const { email , password } = req.body;

   try {  
   //check if user exist 
     let user = await User.findOne({ email });
     if(!user){
         res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
     }
   //end of check if user exist 

   // Return jsonwebtoken 
      const payload = {
        user: {
          id: user.id
        }
      }

   //matching password
     
     const isMatch = await bcrypt.compare(password, user.password);

     if(!isMatch){
      res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
     }
    
   //end of matching password

      jwt.sign(
        payload,
       config.get('jwtSecret'),
       {expiresIn: 360000 },
       (err, token) => {
           if(err) throw err;
           res.json({token});
       });
   //end of jsonwebtoken
} catch(err) {
    console.error(err.message);
    res.status(500).send('server Error');
}
});

module.exports = router;