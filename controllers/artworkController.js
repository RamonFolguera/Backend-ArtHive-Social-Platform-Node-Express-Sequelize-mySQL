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
artworkController.getAllMyArtworks = (req, res) => {return res.send('Recieved all your artworks')};
artworkController.updateMySelectedArtwork = (req, res) => {return res.send('Artwork updated')};

artworkController.createArtwork = async (req, res) => {
    try {
        const { artist_id, title, category, description, technique, dimensions, date_creation, status, image_url, price } = req.body;
        const role_id = req.roleId;
        const user_id = req.userId;
        console.log(req.userId);
        console.log(user_id);
        if (role_id === 1 || role_id === 2 || role_id === 3 ) {
        const newArtwork = Artwork.create(
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
            }
        )
        return res.json(
            {
            success: true,
            message: "Artwork succesfully created",
            data: newArtwork
            });
        } else {
            return res.json(
                {
                success: false,
                message: "You have not permission to do that. Please, register as Artist or ask an admin.",
                });
        }
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