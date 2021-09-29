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
   await queryInterface.bulkInsert('fuber_customers', [{
    firstName: "John",
    lastName: "Doe",
    email: "jdoe@jane.com",
    createdAt: new Date(),
    updatedAt: new Date()

   },
   {
    firstName: "Tim",
    lastName: "Davis",
    email: "tdavis@jane.com",
    createdAt: new Date(),
    updatedAt: new Date()

   },
   {
    firstName: "John",
    lastName: "Henry",
    email: "jhenry@jane.com",
    createdAt: new Date(),
    updatedAt: new Date()

   },
   {
    firstName: "John",
    lastName: "Cena",
    email: "jcena@jane.com",
    createdAt: new Date(),
    updatedAt: new Date()

   },
   {
    firstName: "Josh",
    lastName: "Childress",
    email: "jchildress@jane.com",
    createdAt: new Date(),
    updatedAt: new Date()

   }])
   {}
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("fuber_customers", null, {})
  }
};
