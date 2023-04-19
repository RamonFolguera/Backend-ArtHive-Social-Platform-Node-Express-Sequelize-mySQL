const user_artworkController = require('../controllers/user_artworkController');
const verifyToken = require('../middleware/verifyToken');
const isAdminSuperAdminOrArtLover = require('../middleware/isAdminSuperAdminOrArtLover');
const isAdmin = require('../middleware/isAdmin');
const isSuperAdmin = require('../middleware/isSuperAdmin');

const router = require('express').Router();

router.use(verifyToken, isAdminSuperAdminOrArtLover);

router.post('/favorite', user_artworkController.addFavorites);
router.post('/comment', user_artworkController.addComments);
router.post('/rating',  user_artworkController.addRating);

router.put('/favorite/:id', user_artworkController.updateFavoritesById);
router.put('/comment/:id', user_artworkController.updateCommentsById);
router.put('/rating/:id',  user_artworkController.updateRatingById);

router.delete('/comment/:id', user_artworkController.deleteCommentsById);
router.delete('/rating/:id',  user_artworkController.deleteRatingById);

// router.delete('/:id', verifyToken, user_artworkController.deleteUserArtworksById);

module.exports = router;