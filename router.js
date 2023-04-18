const router = require('express').Router();
const roleRoutes = require ('./views/roleRoutes');
const userRoutes = require ('./views/userRoutes');
const artworkRoutes = require ('./views/artworkRoutes');
const authRoutes = require ('./views/authRoutes');
const user_artworkRoutes = require ('./views/user_artworkRoutes');

router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/artworks', artworkRoutes);
router.use('/auth', authRoutes);
router.use('/user-artwork', user_artworkRoutes);

module.exports = router;