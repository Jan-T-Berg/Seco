'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImageStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ImageStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ImageStatus',
  });
  return ImageStatus;
};