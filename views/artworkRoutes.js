const artworkController = require('../controllers/artworkController');
const verifyToken = require('../middleware/verifyToken');
const isArtist = require('../middleware/isArtist');


const router = require('express').Router();

//TODO add verfyToken and isSuperAdmin middlewares

//As user
router.get('/', artworkController.getAllArtworks);

//As artist

router.use(verifyToken, isArtist);
router.get('/mine',  artworkController.getAllMyArtworks);
router.put('/update/:id',  artworkController.updateMySelectedArtwork);
router.post('/new',  artworkController.createArtwork);
router.delete('/delete', artworkController.deleteArtwork);

module.exports = router;