const router = require('express').Router();
const roleRoutes = require ('./views/roleRoutes');
const userRoutes = require ('./views/userRoutes');
const artworkRoutes = require ('./views/artworkRoutes');

router.use('/roles', roleRoutes);
router.use('/users', userRoutes);
router.use('/artworks', artworkRoutes);




module.exports = router;