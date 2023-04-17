const artworkController = require('../controllers/artworkController');
const verifyToken = require('../middleware/verifyToken');


const router = require('express').Router();

//TODO add verfyToken and isSuperAdmin middlewares

//As user
router.get('/', artworkController.getAllArtworks);

//As artist
router.get('/mine', verifyToken, artworkController.getAllMyArtworks);
router.put('/update/:id', verifyToken, artworkController.updateMySelectedArtwork);
router.post('/new', verifyToken, artworkController.createArtwork);
router.delete('/delete/:id', verifyToken, artworkController.deleteArtwork);

module.exports = router;