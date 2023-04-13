'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Roles', [
        {id: 1,artistic_name: "Alex artlab", about_me:"Spanish architect who has passion for painting.",personal_web:"www.mywebart.com",social_media_links:"www.myinstagram.com",createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 2,name: "J and Colours", about_me:"Early 30s. I got my degree in arts.",personal_web:"www.myportfolioart.com",social_media_links:"www.myfacebook.com", createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        
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
