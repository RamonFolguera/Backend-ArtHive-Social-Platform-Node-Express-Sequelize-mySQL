const { User, Artist } = require('../models');
const bcrypt = require('bcrypt');


const userController = {};

//As admin 
userController.getAllUsersAsAdmin = async (req, res) => {
    try {
        const users = await User.findAll(
            {     
            attributes: {
                exclude: ["password"],
        }
    }
        );
        return res.json(
            {
            success: true,
            message: "All Registered Users succesfully retrieved as user admin",
            data: users
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all registered users as user admin",
            error: error.message
        })
    }
};

userController.updateUserStatusAsAdmin = async (req, res) => {
    try {
        const userId = req.params.id
        const { status } = req.body;
      
        const updateUser = await User.update(
            {
               status: status
            },
            {
                where: {
                    id: userId
                }
            });
        
            if (!updateUser) {
                return res.send('User profile not updated')
            }

        return res.json(
            {
            success: true,
            message: "User Status succesfully updated",
            data: updateUser
            });

    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong trying to update your the user's status",
                error: error.message
            })
    }
}

userController.updateUserProfileAsAdmin = async (req, res) => {
    try {
        
        const userId = req.params.id
        const { name, last_name, email, password, role_id, phone, city, country } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateUser = await User.update(
            {
                name: name,
                last_name: last_name,
                email: email,
                password: encryptedPassword,
                role_id: role_id,
                phone: phone,
                city: city,
                country: country
            },
            {
                where: {
                    id : userId,
                },
            });
        
            if (!updateUser) {
                return res.send('User profile not updated')
            }

        return res.json(
            {
            success: true,
            message: "User profile succesfully updated",
            data: updateUser
            });

    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong trying to update your profile",
                error: error.message
            })
    }
}


//Get My Profile as artist, art lover, or admin depending on role
userController.getMyUserProfile = async (req, res) => {

    const roleId = req.roleId
    const userId = req.userId

    try {

        if (roleId === 4) {
            const user = await User.findOne(
                { 
                where: 
                { 
                    id: userId 
                },    
            });
    
            return res.json(
                {
                    success: true,
                    message: "User Artist succesfully retrieved",
                    data: user
                }
            )
    }  else if (roleId === 3) {
        const user = await User.findOne(
            { 
            where: 
            { 
                id: userId 
            },
            include: [
                {
                    model: Artist,
                    where: { user_id: userId },
                    attributes: {
                        exclude: ["user_id","createdAt", "updatedAt"]
                    },
                },
            ],

        });

        return res.json(
            {
                success: true,
                message: "User Artist succesfully retrieved",
                data: user
            }
        )
}  

    const user = await User.findByPk(req.userId);
    return res.json(
        {
            success: true,
            message: "User Admin or SuperAdmin succesfully retrieved",
            data: user
        }
    )

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error: error.message
            }
        );
    }
};


userController.updateMyUserProfile = async (req, res) => {
    try {
        
        const userId = req.userId
        const { name, last_name, email, password, phone, city, country } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateUser = await User.update(
            {
                name: name,
                last_name: last_name,
                email: email,
                password: encryptedPassword,
                phone: phone,
                city: city,
                country: country
            },
            {
                where: {
                    id : userId,
                },
            });
        
            if (!updateUser) {
                return res.send('User profile not updated')
            }

        return res.json(
            {
            success: true,
            message: "User profile succesfully updated",
            data: updateUser
            });

    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong trying to update your profile",
                error: error.message
            })
    }
};

//As artist
//TODO
userController.getUsersThatFollowMe = (req, res) => {return res.send('Profile updated')};

module.exports = userController;