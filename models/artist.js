'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artist.belongsTo(
        models.User,
        {
          foreignKey: 'user_id'
        }
      ),
      Artist.hasMany(
        models.Artwork,
        {
          foreignKey: 'artist_id',
          as: 'artworks'
        }
      )
    }
  }
  Artist.init({
    user_id: DataTypes.INTEGER,
    artistic_name: DataTypes.STRING,
    about_me: DataTypes.STRING,
    personal_web: DataTypes.STRING,
    social_media_links: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};