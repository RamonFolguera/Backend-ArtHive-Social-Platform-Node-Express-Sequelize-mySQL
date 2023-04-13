const roleController = require('../controllers/roleController');


const router = require('express').Router();

//TODO add verfyToken and isSuperAdmin middlewares
router.put('/user/role', roleController.newRole);


module.exports = router;