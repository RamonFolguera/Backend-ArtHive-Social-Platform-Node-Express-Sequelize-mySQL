const artworkController = {};

//As admin TODO

//As user
artworkController.getAllArtworks = (req, res) => {return res.send('Recieved gallery with all works')};
artworkController.getSelectedArtworkInDetail = (req, res) => {return res.send('Artwork in detail')};

//As artist
artworkController.getAllMyArtworks = (req, res) => {return res.send('Recieved all your artworks')};
artworkController.updateMySelectedArtwork = (req, res) => {return res.send('Artwork updated')};
artworkController.createArtwork = (req, res) => {return res.send('Created artwork')};
artworkController.deleteArtwork = (req, res) => {return res.send('Deleted artwork')};





module.exports = artworkController;