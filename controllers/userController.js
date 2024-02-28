const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// @Desc Endpoint for registering user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res, next) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Provide all fields");
    }
    
    const user = await User.findOne({email:email});
    if (user) {
        res.status(400);
        throw new Error("User already registered with this email");
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("here");
    const newUser = await User.create({username:username, email:email, password:hashedPassword})
    await newUser.validate();
    if (newUser) res.status(200).json({"status":"s", "user_id":newUser._id, "email":newUser.email});
    else {
        res.status(400);
        throw new Error("Error registering user");
    }
    
})


// @Desc Endpoint for login
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email:email});
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            id:user._id,
            username:user.username,
            email:user.email,            
        }, process.env.ACCESS_TOKEN_KEY,  {expiresIn:'15m' });

        res.status(200).json({status:"s", email:user.email, access_token:accessToken});
    } 

    res.status(400).json({message:"Email or Password is not Valid"});

})

// @Desc Endpoint for current user
// @route POST /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res, next) => {
    console.log(req.user);
    const tokenInfo = req.user;
    const user = await User.findById(tokenInfo.id).exec();
    res.status(200).json({status:"s", userInfo: user});
})

module.exports = {registerUser, loginUser, currentUser};