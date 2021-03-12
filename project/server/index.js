const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const axios = require("axios");
const bodyParser = require('body-parser');
require('dotenv').config()

const {categorieRoutes} = require("./routes/routes");

const path = require("path");
app.use(express.static(path.join(__dirname,'public')));


app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const logger = require("./logger/logger");



mongoose.connect("mongodb+srv://admin:admin@cluster0.iutbg.mongodb.net/Categorie?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

app.use("/",categorieRoutes);


// app.listen(3001,() =>{
//     console.log("Server running on port 3001...");
// });

app.listen(3001,() =>{
    logger.info("Server running on port 3001...");
    logger.error("error");
});
