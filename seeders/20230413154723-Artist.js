'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Artists', [
        {id: 1,user_id:3,artistic_name: "Alex Artlab", about_me:"Spanish architect who has passion for painting.",personal_web:"www.mywebart.com",social_media_links:"www.myinstagram.com",createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 2,user_id:5,artistic_name: "Emma and Colours", about_me:"Early 30s. I got my degree in arts.",personal_web:"www.myportfolioart.com",social_media_links:"www.myfacebook.com", createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 3, user_id: 7, artistic_name: "Marie's Studio", about_me: "Self-taught artist with a passion for acrylic painting.", personal_web: "www.maggiesstudio.com", social_media_links: "www.instagram.com/maggiesstudio", createdAt: "2023-04-01 00:00:00", updatedAt: "2023-04-01 00:00:00"},
        {id: 4, user_id: 9, artistic_name: "Studio G", about_me: "Graphic designer with a passion for modern, minimalist design.", personal_web: "www.studiog.com", social_media_links: "www.linkedin.com/studiog", createdAt: "2023-04-01 00:00:00", updatedAt: "2023-04-01 00:00:00"},
        {id: 5, user_id: 10, artistic_name: "Daniel Art", about_me: "Mixed media artist with a focus on collage and photography.", personal_web: "www.samanthaart.com", social_media_links: "www.twitter.com/samanthaart", createdAt: "2023-05-01 00:00:00", updatedAt: "2023-05-01 00:00:00"}

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
