const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/verifyToken');
const isSuperAdmin = require('../middleware/verifyToken');


const router = require('express').Router();

//CRUD
//TODO add verfyToken and isSuperAdmin middlewares

router.get('/', verifyToken, isAdmin, isSuperAdmin, userController.getAllUsersAsAdmin);
router.get('/me', verifyToken, userController.getMyUserProfile);
router.put('/update-me', verifyToken,userController.updateMyUserProfile);


module.exports = router;