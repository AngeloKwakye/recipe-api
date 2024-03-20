import express from 'express';
import recipeRouter from './routes/recipes.routes.js'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';

//load the environment variable
dotenv.config()

const app = express();
const PORT = process.env.PORT

//apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//use Router
app.use('/recipes', recipeRouter);

//make database connection (mongoose)
await mongoose.connect(process.env.MONGO_URI);


app.listen(PORT, () => {
    console.log('we are live!!!!');
})