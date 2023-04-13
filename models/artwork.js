'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artwork.belongsToMany(
        models.User,
        {
          through: 'User_artworks',
          foreignKey: 'artwork_id'
        }
      ),
      Artwork.belongsTo(
        models.Artist,
        {
          foreignKey: 'artist_id'
        }
      )
    }
  }
  Artwork.init({
    artist_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    technique: DataTypes.STRING,
    dimensions: DataTypes.STRING,
    date_creation: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    image_url: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'artwork',
  });
  return Artwork;
};