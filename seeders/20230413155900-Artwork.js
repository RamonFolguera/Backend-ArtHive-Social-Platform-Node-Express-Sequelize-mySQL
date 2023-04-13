'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Roles', [
        {id: 1,artist_id:1,title: "100 self-portraits",category:"Digital + paint",description:"A series of self-portraits made by different techniques by hand and digital postproduction",technique:"acrylics + digital",dimensions:"500x500mm",date_creation:"2023-03-01",status:true,image_url:"url.com",price:100,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 2,artist_id:1,title: "Blue landscape",category:"Digital + paint",description:"A series of self-portraits made by different techniques by hand and digital postproduction",technique:"acrylics + digital",dimensions:"500x500mm",date_creation:"2023-03-01",status:true,image_url:"url.com",price:100,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 3,artist_id:1,title: "Don't look back",category:"Digital + paint",description:"A series of self-portraits made by different techniques by hand and digital postproduction",technique:"acrylics + digital",dimensions:"500x500mm",date_creation:"2023-03-01",status:true,image_url:"url.com",price:100,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 4,artist_id:2,title: "Bright night",category:"Digital + paint",description:"A series of self-portraits made by different techniques by hand and digital postproduction",technique:"acrylics + digital",dimensions:"500x500mm",date_creation:"2023-03-01",status:true,image_url:"url.com",price:100,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        
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
