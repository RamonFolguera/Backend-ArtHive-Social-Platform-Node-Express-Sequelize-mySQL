const artworkController = require('../controllers/artworkController');


const router = require('express').Router();

//TODO add verfyToken and isSuperAdmin middlewares

//As user
router.get('/artworks', artworkController.getAllArtworks);
router.get('/artworks/detail', artworkController.getSelectedArtworkInDetail);

//As artist
router.get('/artworks/mine', artworkController.getAllMyArtworks);
router.put('/artworks/update', artworkController.updateMySelectedArtwork);
router.post('/artworks/new', artworkController.createArtwork);
router.delete('/artworks/delete', artworkController.deleteArtwork);

module.exports = router;