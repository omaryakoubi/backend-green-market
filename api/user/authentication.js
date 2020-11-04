const router = require("express").Router();
const bcrypt = require("bcrypt");
const user = require("../../model/user");

router.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      phoneNumber,
    } = req.body;
    const emailRegistered = await user.findOne({ email });
    const phoneNumberRegistered = await user.findOne({ phoneNumber });

    if (emailRegistered) {
      res.send("address mail already registred");
    }

    if (phoneNumberRegistered) {
      res.send("phone number already registred");
    }

    if (password !== passwordConfirmation) {
      res.send("try again your password are not the same");
    } else {
      const hashedPassword = await bcrypt.hashSync(
        passwordConfirmation,
        10,
        (err, salt) => {
          if (err) {
            console.log(error);
          } else {
            password = hashedPassword;
          }
        }
      );
      const newUser = new user({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      }).save();
      
      res.send(newUser);
    }
  } catch (error) {
    res.json(error);
    console.log(error);
  }
});

module.exports = router;
