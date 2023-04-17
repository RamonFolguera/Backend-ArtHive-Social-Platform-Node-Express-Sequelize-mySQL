const { Artwork, Artist, User } = require('../models');
const artworkController = {};

//As admin TODO

//As user
artworkController.getAllArtworks = async (req, res) => {
    try {
        const artworks = await Artwork.findAll(
            {
                include: [
                    
                        {
                            model: Artist,
                                
                            include: {
                                model:User,
                                attributes: {
                                    exclude: ["password"]
                                }
                            } 
                        }
                    
                ],                   
            }
        )

        return res.json(
            {
            success: true,
            message: "All artworks succesfully retrieved",
            data: artworks
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong trying to get all artworks",
                error: error.message
            })
        }
};

artworkController.getSelectedArtworkInDetail = (req, res) => {return res.send('Artwork in detail')};

//As artist
artworkController.getAllMyArtworks = (req, res) => {return res.send('Recieved all your artworks')};
artworkController.updateMySelectedArtwork = (req, res) => {return res.send('Artwork updated')};
artworkController.createArtwork = (req, res) => {return res.send('Created artwork')};
artworkController.deleteArtwork = (req, res) => {return res.send('Deleted artwork')};





module.exports = artworkController;