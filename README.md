# Final Project - Backend - ArtHive - My Art Social Platform
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
9. Ready to test the endpoints in Postman. Here you have my Collection in JSON format:

!['importJSONpostman'](./Postman_collection_ArtHive.json)

<details>
<summary>Project 6 - Laravel will be exported as a JSON file 📝</summary>

		

</details>

Copy that JSON and paste it in here:
!['importJSONpostman'](./img/importJSONpostman.JPG)
image.png

## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - USERS REGISTER

            POST http://localhost:8000/api/register/
        body:
        ``` js
            
          {
            "name": "James",
            "last_name": "Webb",
            "username": "RockyRock",
            "email": "james@james.com",
            "password": "999999"
          }
        ```

    - USERS LOGIN

            POST http://localhost:8000/api/login/  
        body:
        ``` js
        {
            "email": "alex@alex.com",
            "password": "123456"
        }
        ```

    - USERS LOGOUT

            POST http://localhost:8000/api/logout/  

- USER
    - USER PROFILE 

        Copy the generated TOKEN generado with authenticate from LOGIN:


        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

            GET http://localhost:8000/api/my-profile/

        

    - USER PROFILE DETAILS UPDATE 

        Copy the generated TOKEN generado with authenticate from LOGIN:

        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

            PUT http://localhost:8000/api/my-profile/update
        body:
        ``` js
            {
            "name": "Alex updated",
            "last_name": "Moya updated",
            "username": "updated",
            "email": "alex@gmailupdated.com",
            "password": "123456"
            }
        ```

    - GET ALL REGISTERED USERS AS ADMIN

        LOGIN as USER with ADMIN role:

        body:
        ``` js
            {
                "email": "alex@alex.com",
                "password": "123456"
            }
        ```

        Copy the generated TOKEN generado with authenticate from LOGIN:


        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

            GET  http://localhost:8000/api/users/all

- PARTY
    - CREATE PARTIES

            POST http://localhost:8000/api/party/
        body:
        ``` js
            {
                "game_id": 4,
                "name": "NewParty"
            }
        ```

    - GET ALL PARTIES PLAYING A SPECIFIC GAME

        Adding id from the selected game by params (/id).

            GET http://localhost:8000/api/partiesByGameId/2

    - JOIN A PARTY

        Copy the generated TOKEN generado with authenticate from LOGIN:

        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.


            POST http://localhost:8000/api/party/join
        body:
        ``` js
            {
                "party_id": 4
            }
        ```

    - LEAVE A PARTY

        Copy the generated TOKEN generado with authenticate from LOGIN:

        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.


            POST http://localhost:8000/api/party/leave
        body:
        ``` js
            {
                "party_id": 4
            }
        ```
    
- MESSAGES
    - GET ALL MESSAGES IN A PARTY

        Copy the generated TOKEN generado with authenticate from LOGIN:

        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

        Adding id from the selected party by params (/id).

            GET  http://localhost:8000/api/messages/party/1


    - CREATE NEW MESSAGES

        Copy the generated TOKEN generado with authenticate from LOGIN:

        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.


            POST http://localhost:8000/api/messages/new
        body:
        ``` js
            {
                "party_id": 1,
                 "message": "Whats up guys?"
            }
        ```

- UPDATE MESSAGES

        Copy the generated TOKEN generado with authenticate from LOGIN:

        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

        Adding id from the selected message by params (/id)

            PUT http://localhost:8000/api/messages/1
        body:
       ``` js
            {
                "message": "Whats up guys?"
            }
        ```      

- DELETE MESSAGES

        Copy the generated TOKEN generado with authenticate from LOGIN:

        ```
            "1|GmWPYpZbnEKrKpqHPh6Z2oFxl14oQxMaPKpJexYX"
        ```

        In AUTHORIZATION. Type BEARER TOKEN. Paste the generated TOKEN.

        Adding id from the selected message by params (/id)

            DELETE http://localhost:8000/api/messages/1
         
</details>



## Licencia
This project is under the following license [MIT License](https://github.com/RamonFolguera/rfc-geekshubs-fsd-val-project6-16042023/blob/master/LICENSE).

## Webography:
To finish this project I have used the following documentation:
- [Laravel documentation](https://laravel.com/docs/9.x)


## Development:

``` js
  console.log("Developed by: " + Ramón Folguera Carbonell);
```  

Project made by:

- **Ramón**
<a href="https://github.com/RamonFolguera" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>

##Contacto
- **Ramón**
<a href = "mailto:folguera.ramon@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/ram%C3%B3n-folguera-0ab32776/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>

## Thanks:

I want to thank my GeekHub mentors for all the support they have given us everyday. For this particular project thanks to:

- **Dani**  
<a href="https://github.com/datata" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 














