'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_artwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_artwork.init({
    user_id: DataTypes.INTEGER,
    artwork_id: DataTypes.INTEGER,
    favorite: DataTypes.STRING,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_artwork',
  });
  return user_artwork;
};