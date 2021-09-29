'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fuber_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  fuber_orders.init({
    restaurant_id: DataTypes.INTEGER,
    restaurant_name: DataTypes.STRING,
    restaurant_order: DataTypes.STRING,
    mealImg: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date(),    
  }, {
    sequelize,
    modelName: 'fuber_orders',
  });
  return fuber_orders;
};