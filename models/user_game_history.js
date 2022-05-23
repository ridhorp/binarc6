'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_game_history.init({
    id_user: DataTypes.INTEGER,
    history: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User_game_history',
  });
  return User_game_history;
};