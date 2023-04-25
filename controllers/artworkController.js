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

//As artist
artworkController.getAllMyArtworks = async (req, res) => {
    try {
        
        const artistId = req.artistId;

        const allMyArtworks = await Artwork.findAll(
            {
                where: { artist_id: artistId }
            }
            )

        return res.json(
            {
                success: true,
                message: "Artworks succesfully retrieved",
                data: allMyArtworks
            });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get your artworks",
            error: error.message
        })
    }
};

artworkController.updateMySelectedArtwork = async (req, res) => {
    try {
        const userId = req.userId
        const artworkId = req.params.id;
        const { artist_id, title, category, description, technique, dimensions, date_creation, status, image_url, price } = req.body;

        const artist = await Artist.findOne({ where: { user_id: userId } });
        if (!artist) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this artwork",
            });
        }
        
        const numUpdatedRowArtwork = await Artwork.update(
            {
                artist_id : artist_id,
                title : title,
                category : category,
                description : description,
                technique : technique,
                dimensions : dimensions,
                date_creation : date_creation,
                status : status,
                image_url : image_url,
                price : price,
            }, 

            {
                where: {
                    id: artworkId,
                    artist_id: artist.id,
                },
            });
            
            if (numUpdatedRowArtwork[0] === 0) {
                return res.json({
                  success: false,
                  message: "The artwork could not be updated",
                });
              }

              const updatedArtwork = await Artwork.findByPk(artworkId);

        return res.json(
            {
            success: true,
            message: "Artwork successfully updated",
            data: updatedArtwork
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to update the artwork details",
            error: error.message
        })
    }
};

artworkController.createArtwork = async (req, res) => {
    try {
        const { artist_id, title, category, description, technique, dimensions, date_creation, status, image_url, price } = req.body;
        const role_id = req.roleId;

        if (role_id !== 1 && role_id !== 2 && role_id !== 3 ) {
            return res.json(
                {
                success: false,
                message: "You have not permission to do that. Please, register as Artist or ask an admin.",
                });
            }
        const newArtwork = await Artwork.create(
            {
                artist_id : artist_id,
                title : title,
                category : category,
                description : description,
                technique : technique,
                dimensions : dimensions,
                date_creation : date_creation,
                status : status,
                image_url : image_url.replaceAll(" ", "_"),
                price : price,
            }
        )
        return res.json(
            {
            success: true,
            message: "Artwork succesfully created",
            data: newArtwork
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not upload your artwork",
                error: error.message
            })
    
    }
};
artworkController.deleteArtwork = (req, res) => {return res.send('Deleted artwork')};





module.exports = artworkController;