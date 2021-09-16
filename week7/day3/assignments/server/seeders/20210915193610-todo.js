'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("todoLists",[{
     todoName: "Go to the store and buy steaks for dinner",
     createdAt: new Date(),
     updatedAt: new Date()},
    {
      todoName: "Check undercarraige for missing push pins",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      todoName: "Take out the garbage",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      todoName: "Pick the kids up from basketball practices",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
    {}
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("todoLists",null,{});
  }
};
