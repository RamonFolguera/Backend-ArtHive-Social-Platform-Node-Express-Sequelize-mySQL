const userController = require('../controllers/userController');
const isArtist = require('../middleware/isArtist');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/verifyToken');
const isSuperAdmin = require('../middleware/verifyToken');


const router = require('express').Router();

router.get('/', verifyToken, isAdmin, isSuperAdmin, userController.getAllUsersAsAdmin);
router.get('/me', verifyToken, userController.getMyUserProfile);
router.put('/update-me', verifyToken,userController.updateMyUserProfile);


module.exports = router;