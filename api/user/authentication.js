const router = require("express").Router();
const bcrypt = require("bcrypt");
const user = require("../../model/user");

router.post("/register", async (req, res) => {
  try {
    let {
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
      await bcrypt.hash(passwordConfirmation, 10, (err, hash) => {
        if (err) {
          console.log(error);
        } else {
          password = hash;
          const newUser = new user({
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
          }).save();

          res.send(newUser);
        }
      });
    }
  } catch (error) {
    res.json(error);
    console.log(error);
  }
});

module.exports = router;
