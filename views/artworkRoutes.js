const artworkController = require('../controllers/artworkController');


const router = require('express').Router();

//TODO add verfyToken and isSuperAdmin middlewares

//As user
router.get('/', artworkController.getAllArtworks);

//As artist
router.get('/mine', artworkController.getAllMyArtworks);
router.put('/update', artworkController.updateMySelectedArtwork);
router.post('/new', artworkController.createArtwork);
router.delete('/delete', artworkController.deleteArtwork);

module.exports = router;