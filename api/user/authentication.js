const router = require("express").Router();
const user = require("../../model/user");

router.post("/register", async (req,res) => {
    try {   
        const { firstName, lastName, email, password, passwordConfirmation, phoneNumber }
        const availableMail = await user.findOne({email})
        const availablePhoneNumber = await user.findOne({phoneNumber})
        
        if (!availableMail) {
            res.json({message:"address mail already registred"})
        }
        
        if (!availablePhoneNumber) {
            res.json({message:"phone number already registred"})
        }
        if (password !== passwordConfirmation ) {
            res.json({message:"try again your password are not the same"})
        } else {
            new user({
                firstName,
                lastName,
                email,
                password,
                phoneNumber
            })
        }

    } catch(error) {
        res.json(error);
        console.log(error);
    }
})

module.exports = routers