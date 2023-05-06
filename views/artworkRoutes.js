const artworkController = require('../controllers/artworkController');
const verifyToken = require('../middleware/verifyToken');
const isArtist = require('../middleware/isArtist');

const router = require('express').Router();

//Home

router.get('/', artworkController.getAllArtworks);

//As user
router.get('/user', verifyToken, artworkController.getAllArtworksAsUser);

//As artist

router.use(verifyToken, isArtist);
router.get('/mine',  artworkController.getAllMyArtworks);
router.put('/update/:id',  artworkController.updateMySelectedArtwork);
router.post('/new',  artworkController.createArtwork);
router.delete('/delete/:id', artworkController.deleteMyArtwork);

module.exports = router;