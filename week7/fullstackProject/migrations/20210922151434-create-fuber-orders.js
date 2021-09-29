'use strict';

const { Sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fuber_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurant_id: {
        type: Sequelize.INTEGER
      },
      restaurant_name: {
        type: Sequelize.STRING
      },
      restaurant_order: {
        type: Sequelize.STRING
      },
      mealImg: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fuber_orders');
  }
};