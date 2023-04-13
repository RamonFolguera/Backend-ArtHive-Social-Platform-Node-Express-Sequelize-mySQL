'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(
        models.Role,
      ),
      User.belongsToMany(
        models.Artwork,
        {
          through: 'User_artworks',
          foreignKey: 'user_id'
        }
      ),
      User.hasMany(
        models.Artist,
        {
          foreignKey: 'user_id'
        }
      )
    }
  }
  User.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    phone: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};