const user_artworkController = require('../controllers/user_artworkController');
const verifyToken = require('../middleware/verifyToken');


const router = require('express').Router();


router.post('/favorite',verifyToken, user_artworkController.addFavorites);
// router.post('/comment', user_artworkController.createComments);
// router.post('/rating', user_artworkController.createRating);

// router.put('/favorite', user_artworkController.updateFavorites);
// router.put('/comment', user_artworkController.updateComments);
// router.put('/rating', user_artworkController.updateRating);

// router.delete('/favorite', user_artworkController.deleteFavorites);
// router.delete('/comment', user_artworkController.deleteComments);
// router.delete('/rating', user_artworkController.deleteRating);


module.exports = router;