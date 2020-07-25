const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config({ path: '.env' });
const MongoClient = require("mongodb").MongoClient;

// setting the defualt port of the server on local machine as 9000
const PORT = process.env.PORT || 3001;

//all express js setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get("/", function (req, res, next) {
    res.send("Connected to the backend");
})

app.get("*", function (req, res) {
    res.send("Error 404! Resource not found");
})

//everything related to the mongodb connection
const CONNECTION_URL = process.env.DATABASE_URL;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    // MongoClient.connect(
    //     process.env.CONNECTION_URL,
    //     { useNewUrlParser: true, useUnifiedTopology: true },
    //     (error, client) => {
    //         if (error) {
    //             console.log("Error in connecting to the database")
    //             throw error;
    //         }
    //         console.log("Connected to mongoDB Atlas");
    //     }
    // );
})
