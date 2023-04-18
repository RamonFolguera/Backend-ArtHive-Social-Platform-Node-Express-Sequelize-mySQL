const { Artwork, User_artwork } = require("../models")


const user_artworkController = {};

user_artworkController.addFavorites = async (req, res) => {
    try {
        const userId = req.userId;

        const { favorite, artwork_id } = req.body;
        const role_id = req.roleId;

        if (role_id !== 1 && role_id !== 2 && role_id !== 4 ) {
            return res.json(
                {
                success: false,
                message: "You have not permission to do that. Please, register as Art Lover or ask an admin.",
                });
            }
        const newFavorite = await User_artwork.create(
            {
                favorite: favorite,
                user_id: userId,
                artwork_id: artwork_id
            }
        )
        return res.json(
            {
            success: true,
            message: "Artwork successfully marked as favorite",
            data: newFavorite
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not mark artwork as favorite",
                error: error.message
            })
    }
}

user_artworkController.updateFavorites = async (req, res) => {}
user_artworkController.deleteFavorites = async (req, res) => {}

module.exports = user_artworkController;