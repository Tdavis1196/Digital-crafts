'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fuber_restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  fuber_restaurants.init({
    Name: DataTypes.STRING,
    Image: DataTypes.STRING,
    meal:DataTypes.STRING,
    deliveryFee: DataTypes.STRING,
    mealImg: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    sequelize,
    modelName: 'fuber_restaurants',
  });
  return fuber_restaurants;
};