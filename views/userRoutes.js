const userController = require('../controllers/userController');

const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/verifyToken');
const isSuperAdmin = require('../middleware/verifyToken');


const router = require('express').Router();

router.get('/me', verifyToken, userController.getMyUserProfile);
router.put('/update-me', verifyToken,userController.updateMyUserProfile);

//AS ADMIN
router.use(verifyToken, isAdmin, isSuperAdmin);
router.get('/', userController.getAllUsersAsAdmin);
router.put('/update-status/:id', userController.updateUserStatusAsAdmin);
router.put('/update-profile-as-admin/:id', userController.updateUserProfileAsAdmin);


module.exports = router;