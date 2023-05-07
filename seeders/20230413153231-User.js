'use strict';
const bcrypt = require('bcrypt');
const passwordId1 = 'Ramon_123';
const passwordId2 = 'Carlos_123';
const passwordId3 = 'Alex_123';
const passwordId4 = 'Alyna_123';
const passwordId5 = 'Emma_123';
const passwordId6 = 'Laura_123';
const passwordId7 = 'Maria_123';
const passwordId8 = 'Bella_123';
const passwordId9 = 'Elena_123';
const passwordId10 = 'Daniel_123';
const encryptedPassword1 = bcrypt.hashSync(passwordId1, 10);
const encryptedPassword2 = bcrypt.hashSync(passwordId2, 10);
const encryptedPassword3 = bcrypt.hashSync(passwordId3, 10);
const encryptedPassword4 = bcrypt.hashSync(passwordId4, 10);
const encryptedPassword5 = bcrypt.hashSync(passwordId5, 10);
const encryptedPassword6 = bcrypt.hashSync(passwordId6, 10);
const encryptedPassword7 = bcrypt.hashSync(passwordId7, 10);
const encryptedPassword8 = bcrypt.hashSync(passwordId8, 10);
const encryptedPassword9 = bcrypt.hashSync(passwordId9, 10);
const encryptedPassword10 = bcrypt.hashSync(passwordId10, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {id: 1,role_id:1,name: "Ramón", last_name:"Folguera",email:"ramon@ramon.com",password: encryptedPassword1,phone:"666555444",avatar:"yo.png",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,role_id:2,name: "Carlos", last_name:"Garcia",email:"carlos@carlos.com",password: encryptedPassword2,phone:"666555444",avatar:"user5.png",city:"Madrid", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 3,role_id:3,name: "Alex", last_name:"Moya",email:"alex@alex.com",password: encryptedPassword3,phone:"666555444",avatar:"user1.png",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 4,role_id:4,name: "Alyna", last_name:"Nastas",email:"alyna@alyna.com",password: encryptedPassword4,phone:"666555444",avatar:"user6.png",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 5,role_id:3,name: "Emma", last_name:"Smith",email:"emma@emma.com",password: encryptedPassword5,phone:"666555444",avatar:"user2.png",city:"London", country:"UK",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 6,role_id:4,name: "Laura", last_name:"Sánchez",email:"laura@laura.com",password: encryptedPassword6,phone:"666555444",avatar:"user7.png",city:"Valencia", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 7,role_id:3,name: "Maria", last_name:"Garcia",email:"maria@example.com",password: encryptedPassword7,phone:"123456789",avatar:"user4.png",city:"Madrid", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 8,role_id:4,name: "Bella", last_name:"Ramsey",email:"bella@bella.com",password: encryptedPassword8,phone:"987654321",avatar:"user4.png",city:"New York", country:"USA",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 9,role_id:3,name: "Elena", last_name:"Velasco",email:"elena@example.com",password: encryptedPassword9,phone:"555444333",avatar:"user8.png",city:"Barcelona", country:"Spain",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 10,role_id:3,name: "Daniel", last_name:"Perez",email:"dani@example.com",password: encryptedPassword10,phone:"111222333",avatar:"user3.png",city:"Buenos Aires", country:"Argentina",status:true, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"}

     
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
