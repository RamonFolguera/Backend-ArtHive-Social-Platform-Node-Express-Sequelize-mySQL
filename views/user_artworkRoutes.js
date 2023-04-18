const user_artworkController = require('../controllers/user_artworkController');
const verifyToken = require('../middleware/verifyToken');


const router = require('express').Router();


router.post('/favorite',verifyToken, user_artworkController.addFavorites);
router.post('/comment', verifyToken,user_artworkController.addComments);
// router.post('/rating', user_artworkController.createRating);

router.put('/favorite/:id',verifyToken, user_artworkController.updateFavoritesById);
router.put('/comment/:id', verifyToken,user_artworkController.updateCommentsById);
// router.put('/rating', user_artworkController.updateRating);

// router.delete('/favorite', user_artworkController.deleteFavorites);
// router.delete('/comment', user_artworkController.deleteComments);
// router.delete('/rating', user_artworkController.deleteRating);


module.exports = router;