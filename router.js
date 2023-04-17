const router = require('express').Router();
const roleRoutes = require ('./views/roleRoutes');
const userRoutes = require ('./views/userRoutes');
const artworkRoutes = require ('./views/artworkRoutes');
const authRoutes = require ('./views/authRoutes');

router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/artworks', artworkRoutes);
router.use('/auth', authRoutes);




module.exports = router;