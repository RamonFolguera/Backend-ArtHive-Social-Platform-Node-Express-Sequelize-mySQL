const { User } = require('../models');
const bcrypt = require('bcrypt');

const authController = {};

authController.register = async(req, res) => {
    try {
        console.log("entro");
        const { name, last_name, email, password, birth_date, phone } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create(
            {
                name: name,
                last_name: last_name,
                email: email,
                password: encryptedPassword,
                birth_date: birth_date,
                phone: phone,
                role_id: 4
            }
        )
        return res.json(
            {
            success: true,
            message: "Register was succesful",
            data: newUser
            });

    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong with Register",
                error: error.message
            })
    }
}


module.exports = authController;