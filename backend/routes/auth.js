const express = require("express");
const User = require("../models/User");
var jwt = require('jsonwebtoken');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const JWTSecret='tanmaiINote';
//POST request to create user . No login required
router.post(
  "/createUser",
  [
    body("name", "Atleast 3 character required in Name").isLength({ min: 3 }),
    body("email", "Invalid email").isEmail(),
    body("password", "Password should be atleast of length 8").isLength({
      min: 8,
    }),
  ],

  // Async function for creating user
  async (req, res) => {
    try {
      const errors = validationResult(req);
      //checks if any validation error
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email });
      // check if email already registered
      if (user) {
        return res.status(400).json({ error: "Email already registered." });
      }

      //Generation of salt and hash
      const salt = await bcrypt.genSalt(10);

      const secPass = await bcrypt.hash(req.body.password, salt);

      //Creation of new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      //sending AuthToken 
      const data={
          user :{
              id :user.id
          }
      }
      const authToken=jwt.sign(data,JWTSecret);
      res.json({ authToken : authToken,status: "User successfully created" });
    } catch (error) {
      console.log(error);
    }
  }
);
module.exports = router;
