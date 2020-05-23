const express = require('express');
const router = express.Router();
const { check , validationResult} = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const user = require('../../models/Users'); // connnecting model here ...

// @route POST api/users
// @desc  Register User
// @access Public 
// for user learner ..

router.post('/add_cusers/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('password', 'Password should be greater than 6 digit').isLength({min : 6}),
],
async (req, res) => {
  console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    const { name , email , password } = req.body;

   

    try {  
    //check if user exist 
      let user = await User.findOne({ email });
      if(user){
          res.status(400).json({errors: [{msg: 'User already exists'}]});
      }
    //end of check if user exist 
    //get user gravator 
      const avator = gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
      })

      user = new User({
        name,
        email,
        avator,
        password ,
      });

    //end of user gravator
    // encrypt password 

       const salt = await bcrypt.genSalt(10);
       cuser.password = await bcrypt.hash(password, salt);
       await cuser.save(); // saving user to database ...   

    // end of encrypt password
    // Return jsonwebtoken 
       const payload = {
         user: {
           id: user.id
         }
       }

       jwt.sign(
         payload,
        config.get('jwtSecret'),
        {expiresIn: '365d' },
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
