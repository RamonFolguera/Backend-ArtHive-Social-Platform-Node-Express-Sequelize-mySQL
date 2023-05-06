'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Artworks', [
        {id: 1,artist_id:1,title: "100 self-portraits",category:"Digital painting",description:"A series of self-portraits made by different techniques by hand and digital postproduction",technique:"acrylics + digital",dimensions:"500x500mm",date_creation:"2023-03-01",status:true,image_url:"self-portrait.jpg",price:100,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 2,artist_id:1,title: "Blue landscape",category:"Abstract painting",description:"A series of self-portraits made by different techniques by hand and digital postproduction",technique:"acrylics + digital",dimensions:"500x500mm",date_creation:"2023-03-01",status:true,image_url:"blue-landscape.jpg",price:100,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 3,artist_id:1,title: "Don't look back",category:"Oil painting",description:"A series of self-portraits made by different techniques by hand and digital postproduction",technique:"acrylics + digital",dimensions:"500x500mm",date_creation:"2023-03-01",status:true,image_url:"dont-look-back.jpg",price:100,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 4,artist_id:2,title: "Bright night",category:"Mix digital and traditional painting",description:"A series of self-portraits made by different techniques by hand and digital postproduction",technique:"acrylics + digital",dimensions:"500x500mm",date_creation:"2023-03-01",status:true,image_url:"bright-night.jpg",price:100,createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
        {id: 5, artist_id: 2, title: "Mountain View", category: "Photography", description: "A beautiful mountain landscape painting", technique: "Oil on canvas", dimensions: "24x36 inches", date_creation: "2023-04-02", status: true, image_url: "mountain-view.jpg", price: 500, createdAt: "2023-04-02 00:00:00", updatedAt: "2023-04-02 00:00:00"},
        {id: 6, artist_id: 2, title: "Still Life with Flowers", category: "Oil painting", description: "A colorful still life painting featuring flowers and fruit", technique: "Oil on canvas", dimensions: "18x24 inches", date_creation: "2023-04-02", status: true, image_url: "flowers.jpg", price: 300, createdAt: "2023-04-02 00:00:00", updatedAt: "2023-04-02 00:00:00"},
        {id: 7, artist_id: 1, title: "Abstract Dreams", category: "Acrylic painting", description: "A series of abstract paintings in various sizes and shapes", technique: "Mixed media on paper and canvas", dimensions: "Varies", date_creation: "2023-04-10", status: true, image_url: "abstract-dream.jpg", price: 200, createdAt: "2023-04-10 00:00:00", updatedAt: "2023-04-10 00:00:00"},
        {id: 8, artist_id: 2, title: "Floral Explosion", category: "Mix photography and digital", description: "A large acrylic painting of a colorful floral arrangement", technique: "Acrylic on canvas", dimensions: "36x48 inches", date_creation: "2023-04-10", status: true, image_url: "floral-explotion.jpg", price: 800, createdAt: "2023-04-10 00:00:00", updatedAt: "2023-04-10 00:00:00"},
        {id: 9, artist_id: 1, title: "City Lights", category: "Watercolor painting", description: "A digital illustration of a city at night", technique: "Digital drawing and painting", dimensions: "16x20 inches", date_creation: "2023-04-15", status: true, image_url: "city-lights.jpg", price: 150, createdAt: "2023-04-15 00:00:00", updatedAt: "2023-04-15 00:00:00"},
        {id: 10, artist_id: 2, title: "Portrait Study", category: "Oil painting", description: "A realistic portrait drawing of a person", technique: "Charcoal on paper", dimensions: "11x14 inches", date_creation: "2023-04-15", status: true, image_url: "portrait-study.jpg", price: 100, createdAt: "2023-04-15 00:00:00", updatedAt: "2023-04-15 00:00:00"},

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
