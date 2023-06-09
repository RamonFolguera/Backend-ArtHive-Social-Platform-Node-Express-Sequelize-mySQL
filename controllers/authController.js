const { User, Artist } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {};

authController.register = async(req, res) => {
    try {
        const { name, last_name, email, password, role_id, phone, city, country } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        console.log("creating newuser");

   
        const newUser = await User.create(
            {
                name: name,
                last_name: last_name,
                email: email,
                password: encryptedPassword,
                phone: phone,
                role_id: role_id,
                city: city,
                country: country,
                status: true
            }
        )

    
      console.log(req.body.role_id,'role id del body');
        if (req.body.role_id === "3") {
      console.log("entro en artist");

            const newArtist = await Artist.create(
                {
                    user_id : newUser.id,
                }
            );
            return res.json(
                {
                    success: true,
                    message: "Register was successful",
                    data: {
                        user: newUser,
                        artist: newArtist,
                    }
                }
            );
        }

        return res.json(
            {
                success: true,
                message: "Register was successful",
                data: {
                    user: newUser,
                }
            }
        );

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
        console.log(user.role_id);
        if (user.role_id === 3) {
            const artist = await Artist.findOne(
                {
                    where: {
                        user_id : user.id,
                    }
                })
                
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
                    artistId: artist.id,
                    status: user.status
                },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            return res.json({
                
                success: true,
                message: "Login successfull. Enjoy!",
                data: token
            })
            
        }   

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
                status: user.status

            },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );
                console.log(token);

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