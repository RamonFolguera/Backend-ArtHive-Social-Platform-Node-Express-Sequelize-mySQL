'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_artwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_artwork.belongsTo(
        models.User,
        {
          foreignKey: 'user_id'
        }
      ),
      User_artwork.belongsTo(
        models.Artwork,
        {
          foreignKey: 'artwork_id'
        }
      )
    }
  }
  User_artwork.init({
    user_id: DataTypes.INTEGER,
    artwork_id: DataTypes.INTEGER,
    favorite: DataTypes.STRING,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_artwork',
  });
  return User_artwork;
};