const userController = {};

userController.getMyUserProfile = (req, res) => {return res.send('Recieved profile')};
userController.getAllUsersAsAdmin = (req, res) => {return res.send('Recieved all users profile')};
userController.updateMyUserProfile = (req, res) => {return res.send('Profile updated')};



module.exports = userController;