const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require( "dotenv");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const PORT = process.env.PORT;
// const MONGO_URI = process.env.MONGO_URI;
// mongoose.connect(MONGO_URI).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));
app.get('/api', (req, res) => {
    res.send('API is running...');
})
module.exports =  app ;
