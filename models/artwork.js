'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      artwork.belongsToMany(
        models.User,
        {
          through: 'User_artworks',
          foreignKey: 'artwork_id'
        }
      ),
      artwork.belongsTo(
        models.Artist,
      )
    }
  }
  artwork.init({
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
  return artwork;
};