const express = require('express');
const cors = require('cors')
const path = require("path");
const db = require('./db/db.js');
require('dotenv').config()

const app = express();
const multer = require("multer");

const router = require('./router'); 

const checkFileType = function (file, cb) {
      //Allowed file extensions
      const fileTypes = /jpeg|jpg|png|gif|svg/;
    
      //check extension names
      const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    
      const mimeType = fileTypes.test(file.mimetype);
    
      if (mimeType && extName) {
        return cb(null, true);
      } else {
        cb("Error: You can Only Upload Images!!");
      }
    };

let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

//Setting storage engine
const storageEngine = multer.diskStorage({
      destination: "./images",
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
      },
    });

    //initializing multer
    const upload = multer({
          storage: storageEngine,
          limits: { fileSize: 10000000 },
          fileFilter: (req, file, cb) => {
            checkFileType(file, cb);
          },
        });

      

app.use(express.json());

app.post("/single", upload.single("image"), (req, res) => {
      if (req.file) {
        res.send("Single file uploaded successfully");
      } else {
        res.status(400).send("Please upload a valid image");
      }
    });

    app.post("/multiple", upload.array("images", 5), (req, res) => {
          if (req.files) {
            res.send("Muliple files uploaded successfully");
          } else {
            res.status(400).send("Please upload a valid images");
          }
        });

app.use(cors(corsOptions))

app.use(router);

const PORT = process.env.PORT || 4000;

db.then(() => {
    app.listen(PORT, () => console.log("Server running on port " + PORT));
})
    .catch((err) => console.log(err.message)); 