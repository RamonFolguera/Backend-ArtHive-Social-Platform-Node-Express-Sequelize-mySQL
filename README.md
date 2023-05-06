# Final Project - Backend - ArtHive - My Art Social Platform 🧑‍🎨💻👩
<details>
  <summary>Summary 📝</summary>
  <ol>
    <li><a href="#objetivo">Goal</a></li>
    <li><a href="#sobre-el-proyecto">About</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagram</a></li>
    <li><a href="#instalación-en-local">Installation</a></li>
    <li><a href="#work-flow">Work-flow</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Future funtionalities</a></li>
    <li><a href="#licencia">Licence</a></li>
    <li><a href="#webgrafia">webography</a></li>
    <li><a href="#desarrollo">Development</a></li>
    <li><a href="#contacto">Contact</a></li>
  </ol>
</details>

## Goal
In this project from our Full Stack Bootcamp with Geekshubs we are faced with the final challenge for which we are asked to show our knowledge adquired during this 12 weeks. 

We have to create a complete Web Application from scratch using the technology learnt during the bootcamp of our choice, and also, we are given the opportunity to choose the product we want to build.

Once I decided to work with node.js + Express and mySQL + Sequelize, I started to develop my API to meet the requirements that follow: 
- Users registration.
- Login + token + middleware.
- User roles middleware.
- CRUD for the different models.
- At least one Many to many and One to many relation.
- Migrations and seeders.

## About
After thinking about a few different ideas, I decided to create a Social Platform focus on ART.

The idea of this project is to allow users (art lovers) to discover and explore artistic creations from emerging artists or more consolidated ones all around the world.

This concept could seem similar to other popular webapps like Pinterest, but the idea wants to move far from just a place to share images. It aims to be a community where people can connect through Art.

## Stack
Used technologies:

<div align="center">

<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascript-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
<a href="https://git-scm.com/">
    <img src= "https://img.shields.io/badge/git-f34f29?style=for-the-badge&logo=git&logoColor=white"/>
</a>

<a href=" https://www.postman.com/">
    <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
</a>

 </div>


## DDBB diagram
!['ddbb'](./img/MySQL_ddbb.JPG)

## Local installation

1. Clone the repository in a terminal in your computer:
` $ git clone https://github.com/RamonFolguera/rfc-geekshubs-fsd-val-finalproject-backend-070523.git`
2. ` $ npm install ` To install all dependencies needed.
3. Connect my repo with the database with .env file. You just have to rename the file .env.example to .env and change the configuration to match your Docker one.
4. ``` $ npx sequelize-cli db:create ``` To create db.
5. ``` $ npx sequelize-cli db:migrate ``` To execute migrations.
6. ``` $ npx sequelize-cli db:seed:all ``` To execute seeders.
7. ``` $ npx sequelize-cli db:drop ``` In case you need to drop data base. Create, excute migrations and seeders again following steps from number 4.
8. ``` $ npm run dev ```  To start the server.
9. Ready to test the endpoints in Postman. Here you have my Collection in JSON format:<a href="https://github.com/RamonFolguera/rfc-geekshubs-fsd-val-finalproject-backend-070523/blob/dev/Postman_collection_ArtHive.json">
    <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
</a>




Copy that JSON and paste it in here to create a new Collection with all my endpoints:
!['importJSONpostman'](./img/Postman_import.JPG)


## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - USERS REGISTER

            POST http://localhost:3000/auth/register
        body:
        ``` js
            
           {
                "name": "Peter",
                "last_name": "Smith",
                "email": "peter@peter.com",
                "password": "123456",
                "role_id": "role_id",
                "phone": "666555444",
                "city": "Valencia",
                "country":"Spain"
            }
        ```

    - USERS LOGIN

            POST http://localhost:3000/auth/login 
        
        body:
        ``` js
         {
            "email": "ramon@ramon.com",
            "password": "Ramon_123"
        }
        ```

- USER
    - USER PROFILE 

        Copy the generated TOKEN generado with authenticate from LOGIN:


        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtw7NuIiwiZW1haWwiOiJyYW1vbkByYW1vbi5jb20iLCJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjgzMjgzMTI0LCJleHAiOjE2ODMyOTAzMjR9.YAKRv9TyrdK1rFctOiU-0MK3WTCd5Q4gaX_1Fl0lu-U"

        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

            GET http://localhost:3000/users/me/

        

    - USER PROFILE DETAILS UPDATE 

        Copy the generated TOKEN generado with authenticate from LOGIN:

        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtw7NuIiwiZW1haWwiOiJyYW1vbkByYW1vbi5jb20iLCJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjgzMjgzMTI0LCJleHAiOjE2ODMyOTAzMjR9.YAKRv9TyrdK1rFctOiU-0MK3WTCd5Q4gaX_1Fl0lu-U"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

            PUT http://localhost:3000/users/update-me/
        body:
        ``` js
        {
            "name": "Peter",
            "last_name": "Smith",
            "email": "peter@peter.com",
            "password": "123456",
            "phone": "666555444",
            "city": "Rome",
            "country": "Italy"
        }
        ```
    - AS SUPERADMIN AND ADMIN ENDPOINTS 

     LOGIN as USER with SUPERADMIN AND ADMIN role:

        LOGIN as USER with ADMIN or SUPERADMIN role:

        body:
        ``` js
            {
                "email": "ramon@ramon.com",
                "password": "Ramon_123"
            }
        ```

        Copy the generated TOKEN generado with authenticate from LOGIN:


        ```
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtw7NuIiwiZW1haWwiOiJyYW1vbkByYW1vbi5jb20iLCJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjgzMjgzMTI0LCJleHAiOjE2ODMyOTAzMjR9.YAKRv9TyrdK1rFctOiU-0MK3WTCd5Q4gaX_1Fl0lu-U"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

    - GET ALL REGISTERED 

            GET  http://localhost:3000/users/

    - UPDATE USER STATUS 

        PUT http://localhost:3000/users/update-status/5
        body:
        ``` js
        {
            "status": false
        }
        ``` 

    - UPDATE USER STATUS 

         PUT http://localhost:3000/users/update-profile-as-admin/5
        body:
        ``` js
         {
                "name": "Peter",
                "last_name": "Smith",
                "email": "peter@peter.com",
                "password": "123456",
                "role_id": "3",
                "phone": "666555444",
                "city": "Rome",
                "country": "Italy"
            }
        ```          

- ARTWORK

    - GET ALL ARTWORKS 

            GET http://localhost:3000/artworks/

    - UPLOAD A FILE 

            POST http://localhost:3000/file

    - AS USER ENDPOINTS 

     LOGIN as USER with ANY role:

        body:
         ``` js
            {
                "email": "laura@laura.com",
                "password": "Laura_123"
            }
        ```

            Copy the generated TOKEN generado with authenticate from LOGIN:


             ```
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtw7NuIiwiZW1haWwiOiJyYW1vbkByYW1vbi5jb20iLCJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjgzMjgzMTI0LCJleHAiOjE2ODMyOTAzMjR9.YAKRv9TyrdK1rFctOiU-0MK3WTCd5Q4gaX_1Fl0lu-U"
            ```

            In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

    - GET ALL ARTWORKS AS USER

            GET http://localhost:3000/artworks/user  

    AS ARTIST ENDPOINTS

        LOGIN as USER with ARTIST role:

        body:
         ``` js
            {
                "email": "alex@alex.com",
                "password": "Alex_123"
            }
        ```

            Copy the generated TOKEN generado with authenticate from LOGIN:


             ```
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtw7NuIiwiZW1haWwiOiJyYW1vbkByYW1vbi5jb20iLCJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjgzMjgzMTI0LCJleHAiOjE2ODMyOTAzMjR9.YAKRv9TyrdK1rFctOiU-0MK3WTCd5Q4gaX_1Fl0lu-U"
            ```

            In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

    - CREATE ARTWORK REGISTERS

            POST http://localhost:3000/artworks/new
        body:
        ``` js
            {
                "artist_id" : "1",
                "title" : "test painting",
                "category" : "Abstract Painting",
                "description" : "Out of imagination",
                "technique" : "Acrylics",
                "dimensions" : "450x350mm",
                "status" : 1,
                "image_url" : "image.jpg",
                "price" : "60"
            }
        ```
    
    - GET MY ARTWORK REGISTERS

            GET http://localhost:3000/artworks/mine
      
    - UPDATE MY SELECTED ARTWORK REGISTER

            PUT http://localhost:3000/artworks/update/2
        body:
        ``` js
            {
                "artist_id" : "1",
                "title" : "test painting",
                "category" : "Abstract Painting",
                "description" : "Out of imagination",
                "technique" : "Acrylics",
                "dimensions" : "450x350mm",
                "status" : 1,
                "image_url" : "image.jpg",
                "price" : "60"
            }
        ```     
    - DELETE MY SELECTED ARTWORK REGISTER

            DELETE http://localhost:3000/artworks/delete/1

- USER_ARTWORK

    - AS USER ENDPOINTS 

     LOGIN as USER with ANY role:

        body:
         ``` js
            {
                "email": "laura@laura.com",
                "password": "Laura_123"
            }
        ```

            Copy the generated TOKEN generado with authenticate from LOGIN:


             ```
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtw7NuIiwiZW1haWwiOiJyYW1vbkByYW1vbi5jb20iLCJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjgzMjgzMTI0LCJleHAiOjE2ODMyOTAzMjR9.YAKRv9TyrdK1rFctOiU-0MK3WTCd5Q4gaX_1Fl0lu-U"
            ```

            In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

    - GET ALL USER_ARTWORKS AS USER

            GET http://localhost:3000/user-artwork/

    - AS ARTIST, ADMIN OR SUPERADMIN ENDPOINTS 

     LOGIN as USER with ART LOVER role:

        body:
         ``` js
            {
                "email": "laura@laura.com",
                "password": "Laura_123"
            }
        ```
    
            Copy the generated TOKEN generado with authenticate from LOGIN:


             ```
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFtw7NuIiwiZW1haWwiOiJyYW1vbkByYW1vbi5jb20iLCJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNjgzMjgzMTI0LCJleHAiOjE2ODMyOTAzMjR9.YAKRv9TyrdK1rFctOiU-0MK3WTCd5Q4gaX_1Fl0lu-U"
            ```

            In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

    - GET MY USER_ARTWORKS 

            GET http://localhost:3000/user-artwork/mine

    - ADD FAVORITES 

            POST http://localhost:3000/user-artwork/favorite
        body:
        ``` js
            {
                "favorite": true,
                "artwork_id": 8
            }
        ```     
    - UPDATE FAVORITES 

            PUT http://localhost:3000/user-artwork/favorite/1
        body:
        ``` js
            {
                "favorite": true,
            }
        ```  
    - ADD COMMENTS 

            POST http://localhost:3000/user-artwork/comment
        body:
        ``` js
            {
                "comment": "I love the contrast between lights and darks",
                "artwork_id": 3
            }
        ``` 

    - UPDATE COMMENTS 

            PUT http://localhost:3000/user-artwork/comment/1
        body:
        ``` js
            {
                 "comment": "I love the contrast between lights and darks of the environment" 
            }
        ```

    - DELETE COMMENT

            DELETE http://localhost:3000/user-artwork/comment/9

    - ADD RATING 

            POST http://localhost:3000/user-artwork/rating
        body:
        ``` js
            {
                "rating": 50,
                "artwork_id": 3
            }
        ``` 

    - UPDATE RATING 

            PUT http://localhost:3000/user-artwork/rating/9
        body:
        ``` js
            {
                "rating": 100
            }
        ```

    - DELETE RATING

            DELETE http://localhost:3000/user-artwork/10

</details>

## License
This project is under the following license [MIT License](https://github.com/RamonFolguera/rfc-geekshubs-fsd-val-finalproject-backend-070523/blob/master/LICENSE).

## Webography:
To finish this project I have used the following documentation:
- [Sequelize documentation](https://sequelize.org/docs/v6/)


## Development:

``` js
  console.log("Developed by: " + Ramón Folguera Carbonell);
```  

Project made by:

- **Ramón**
<a href="https://github.com/RamonFolguera" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>

## Thanks:

I want to thank my GeekHub mentors for all the support they have given us everyday:

- **Dani**  
<a href="https://github.com/Dave86dev" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 

- **Jose**  
<a href="https://github.com/JoseMarin" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 

- **David**  
<a href="https://www.github.com/userGithub/" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

- **Mara**  
<a href="https://github.com/MaraScampini" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank"></a> 

## Contact

Feel free to contact me anytime, I will be happy to help you with your project or to get me some feedback from you. 

<a href = "mailto:folguera.ramon@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/ram%C3%B3n-folguera-0ab32776/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>












