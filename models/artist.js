'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  artist.init({
    user_id: DataTypes.INTEGER,
    artistic_name: DataTypes.STRING,
    about_me: DataTypes.STRING,
    personal_web: DataTypes.STRING,
    social_media_links: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'artist',
  });
  return artist;
};