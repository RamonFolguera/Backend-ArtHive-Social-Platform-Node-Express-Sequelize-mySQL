const router = require('express').Router();
const roleRoutes = require ('./views/roleRoutes');
const userRoutes = require ('./views/userRoutes');

router.use('/roles', roleRoutes);
router.use('/users', userRoutes);




module.exports = router;