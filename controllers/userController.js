const userController = {};



//As admin TODO
userController.getAllUsersAsAdmin = (req, res) => {return res.send('Recieved all users profile')};

//As user
userController.getMyUserProfile = (req, res) => {return res.send('Recieved my profile')};
userController.updateMyUserProfile = (req, res) => {return res.send('Profile updated')};

//As artist
//TODO
userController.getUsersThatFollowMe = (req, res) => {return res.send('Profile updated')};

module.exports = userController;