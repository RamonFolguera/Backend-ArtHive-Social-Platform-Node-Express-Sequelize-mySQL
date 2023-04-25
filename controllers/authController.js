const { User, Artist } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {};

authController.register = async(req, res) => {
    try {
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

authController.login = async (req,res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne(
            {
                where: {
                    email:email,
                }
            },
        );
        
        const artist = await Artist.findOne(
            {
                where: {
                    user_id : user.id,
                }
            }
        )    
console.log(artist.id);
console.log(user.id);
        if(!user) {
            return res.send("The email address or password is incorrect. Please try again.") 
        }    

        const passwordMatched = bcrypt.compareSync(password, user.password);

        if(!passwordMatched) {
            return res.send("The email address or password is incorrect. Please try again.") 
        }

        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
                userId: user.id,
                roleId: user.role_id,
                artistId: artist.id
            },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );
        
        return res.json({
            
            success: true,
            message: "Login successfull. Enjoy!",
            data: token
        })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong with Login",
                error: error.message
            })
    }
}


module.exports = authController;