const express = require('express');
const cors = require('cors')
const db = require('./db/db.js');
require('dotenv').config()

const app = express();
const multer = require("multer");

const router = require('./router'); 


let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

app.use(express.json());
app.use(cors(corsOptions))

app.use('/static', express.static('uploads'));

//Setting storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${(file.originalname).replaceAll(" ","_")}`)
    }
  })
  
  const upload = multer({ storage })


app.post("/file", upload.single("file"), (req, res) => {

    const file = req.file

      if (file) {
        res.json(file);
      } else {
        res.status(400).send("Please upload a valid image");
      }
    });

app.use(router);

const PORT = process.env.PORT || 4000;


db.then(() => {
    app.listen(PORT, () => console.log("Server running on port " + PORT));
})
    .catch((err) => console.log(err.message)); 