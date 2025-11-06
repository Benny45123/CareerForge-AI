import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

