'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_artworks', [
      {id: 1,user_id: 4,artwork_id:1,favorite: true,comment:"I love your work, this painting is fantastic!",rating:50,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,user_id: 6,artwork_id:1,favorite: false,comment:"Great work!",rating:65, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 3,user_id: 6,artwork_id:3,favorite: true,comment:"This is not my cup of tea but keep it up!",rating:20, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 4,user_id: 6,artwork_id:4,favorite: true,comment:"How did you get that paint effect?",rating:100, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
