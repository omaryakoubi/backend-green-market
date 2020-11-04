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
    const availableMail = await user.findOne({ email });
    console.log(
      firstName,
      lastName,
      password,
      email,
      passwordConfirmation,
      phoneNumber
    );
    const availablePhoneNumber = await user.findOne({ phoneNumber });

    if (!availableMail) {
      res.json({ message: "address mail already registred" });
    }

    if (!availablePhoneNumber) {
      res.json({ message: "phone number already registred" });
    }
    if (password !== passwordConfirmation) {
      res.json({ message: "try again your password are not the same" });
    } else {
      const hashedPassword = await bcrypt.hashSync(
        passwordConfirmation,
        10,
        (err, salt) => {
          password = hashedPassword;
        }
      );
      new user({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      }).save();
    }
  } catch (error) {
    res.json(error);
    console.log(error);
  }
});

module.exports = router;
