'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Images.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user',
      });

      Images.belongsTo(models.ImageStatus, {
        foreignKey: 'imageStatus_id',
        as: 'ImageStatus',
      });

      models.ImageStatus.hasMany(models.Images, {
        foreignKey: 'imageStatus_id',
        as: 'images',
      });
    }
  }
  Images.init(
    {
      imgURL: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      imageStatus_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Images',
    }
  );
  return Images;
};
