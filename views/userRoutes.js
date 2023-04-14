const userController = require('../controllers/userController');

const router = require('express').Router();

//CRUD
//TODO add verfyToken and isSuperAdmin middlewares

router.get('/', userController.getAllUsersAsAdmin);
router.get('/me', userController.getMyUserProfile);
router.put('/me', userController.updateMyUserProfile);


module.exports = router;