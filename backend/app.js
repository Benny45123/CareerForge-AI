const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require( "dotenv");
const { registerUser, loginUser ,authenticateToken } = require("./services/Authentication.js");
const app = express();
const coverLetterRoute = require("./routes/coverLetterRoute.js");
app.use(express.json());
dotenv.config();
app.use(cors({
    origin : [ 'https://career-forge-ai-neon.vercel.app'],
    methods:['GET','POST'],
    credentials:true
}));
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));
app.post('/api/register',registerUser);
app.post('/api/login',loginUser);
// app.use(authenticateToken);
app.use('/api/cover-letter',coverLetterRoute.router);
app.get('/api',(req, res) => {
    res.send('API is running...');
})
module.exports =  app ;
