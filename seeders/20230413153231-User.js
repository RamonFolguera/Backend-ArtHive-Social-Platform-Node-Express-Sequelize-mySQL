'use strict';
const bcrypt = require('bcrypt');
const passwordId1 = '123456';
const passwordId2 = '789123';
const passwordId3 = '456789';
const passwordId4 = '121212';
const passwordId5 = '999999';
const encryptedPassword1 = bcrypt.hashSync(passwordId1, 10);
const encryptedPassword2 = bcrypt.hashSync(passwordId2, 10);
const encryptedPassword3 = bcrypt.hashSync(passwordId3, 10);
const encryptedPassword4 = bcrypt.hashSync(passwordId4, 10);
const encryptedPassword5 = bcrypt.hashSync(passwordId5, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {id: 1,role_id:1,name: "Ramón", last_name:"Folguera",email:"ramon@ramon.com",password: encryptedPassword1,birth_date:"2023-03-01",phone:"666555444",avatar:"url",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,role_id:2,name: "David", last_name:"Valero",email:"david@david.com",password: encryptedPassword2,birth_date:"2023-03-01",phone:"666555444",avatar:"url",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 3,role_id:3,name: "Alex", last_name:"Moya",email:"alex@alex.com",password: encryptedPassword3,birth_date:"2023-03-01",phone:"666555444",avatar:"url",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 4,role_id:4,name: "Alyna", last_name:"Nastas",email:"alyna@alyna.com",password: encryptedPassword4,birth_date:"2023-03-01",phone:"666555444",avatar:"url",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 5,role_id:3,name: "Jordi", last_name:"Jerico",email:"jordi@jordi.com",password: encryptedPassword5,birth_date:"2023-03-01",phone:"666555444",avatar:"url",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 6,role_id:4,name: "Laura", last_name:"Sánchez",email:"laura@laura.com",password: encryptedPassword6,birth_date:"2023-03-01",phone:"666555444",avatar:"url",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
     
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
