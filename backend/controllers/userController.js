const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id, ) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
};

exports.login_user = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    const user_id = user._id;

    res.status(200).json({ email, token, user_id });
  } catch (error) {
    res.status(400).json({error: error.message});
  }

  // res.json( { msg: "login user"} );
});

exports.signup_user = asyncHandler(async (req, res, next) => {
  // res.json( { msg: "sign up user"} );

  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);

    const user_id = user._id;

    res.status(200).json({ email, token, user_id });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});