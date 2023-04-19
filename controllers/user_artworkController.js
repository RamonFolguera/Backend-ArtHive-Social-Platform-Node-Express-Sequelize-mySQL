const { Artwork, User_artwork } = require("../models")


const user_artworkController = {};

user_artworkController.addFavorites = async (req, res) => {
    try {
        const userId = req.userId;
        const { artwork_id } = req.body;
     
        const newFavorite = await User_artwork.create(
            {
                favorite: true,
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

//same as delete?
user_artworkController.updateFavoritesById = async (req, res) => {
    try {
        const userId = req.userId;
        const userArtworkId = req.params.id
        const { favorite } = req.body;

        const updateFavorite = await User_artwork.update(
            {
                favorite: favorite,
            },
            {
            where: {
                id: userArtworkId,
                user_id: userId,
            },
        }
        )
        return res.json(
            {
            success: true,
            message: "Favorite successfully updated",
            data: updateFavorite
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not mark artwork as favorite",
                error: error.message
            })
    }
}

user_artworkController.addComments = async (req, res) => {
    try {
        const userId = req.userId;
        const { comment, artwork_id } = req.body;

        const newComment = await User_artwork.create(
            {
                comment: comment,
                user_id: userId,
                artwork_id: artwork_id
            }
        )
        return res.json(
            {
            success: true,
            message: "Comment successfully posted",
            data: newComment
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not post your comment",
                error: error.message
            })
    }
}

user_artworkController.updateCommentsById = async (req, res) => {
    try {
        const userId = req.userId;
        const userArtworkId = req.params.id
        const { comment } = req.body;

        const updateComment = await User_artwork.update(
            {
                comment: comment,
            },
            {
            where: {
                id: userArtworkId,
                user_id: userId,
            },
        }
        )
        return res.json(
            {
            success: true,
            message: "Comment successfully updated",
            data: updateComment
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not updated your comment",
                error: error.message
            })
    }
}

user_artworkController.deleteCommentsById = async (req, res) => {
    try {
        const userId = req.userId;
        const userArtworkId = req.params.id

        const deleteComment = await User_artwork.update(
            {
                comment: null,
            },
            {
            where: {
                id: userArtworkId,
                user_id: userId,
            },
        }
        )
        return res.json(
            {
            success: true,
            message: "Comment successfully deleted",
            data: deleteComment
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not delete comment to artwork",
                error: error.message
            })
    }
}

user_artworkController.addRating = async (req, res) => {
    try {
        const userId = req.userId;
        const { rating, artwork_id } = req.body;

        const newRating = await User_artwork.create(
            {
                rating: rating,
                user_id: userId,
                artwork_id: artwork_id
            }
        )
        return res.json(
            {
            success: true,
            message: "Rating successfully added",
            data: newRating
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not add your rating",
                error: error.message
            })
    }
}

user_artworkController.updateRatingById = async (req, res) => {
    try {
        const userId = req.userId;
        const userArtworkId = req.params.id
        const { rating } = req.body;

        const updateRating = await User_artwork.update(
            {
                rating: rating,
            },
            {
            where: {
                id: userArtworkId,
                user_id: userId,
            },
        }
        )
        return res.json(
            {
            success: true,
            message: "Rating successfully updated",
            data: updateRating
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not add rating to artwork",
                error: error.message
            })
    }
}

user_artworkController.deleteRatingById = async (req, res) => {
    try {
        const userId = req.userId;
        const userArtworkId = req.params.id

        const deleteRating = await User_artwork.update(
            {
                rating: null,
            },
            {
            where: {
                id: userArtworkId,
                user_id: userId,
            },
        }
        )
        return res.json(
            {
            success: true,
            message: "Rating successfully deleted",
            data: deleteRating
            });
        
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong and could not delete rating to artwork",
                error: error.message
            })
    }
}

module.exports = user_artworkController;