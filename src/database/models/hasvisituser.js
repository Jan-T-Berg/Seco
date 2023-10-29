'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hasVisitUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hasVisitUser.init({
    user_id: DataTypes.INTEGER,
    visitedUser_id: DataTypes.INTEGER,
    choice_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hasVisitUser',
  });
  return hasVisitUser;
};