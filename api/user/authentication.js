const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../../model/user");

router.post("/register", (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  const availableMail = user.findOne({firstName});
  
  new user({
      firstName,
      lastName,
      email,
      phoneNumber
  });
});
