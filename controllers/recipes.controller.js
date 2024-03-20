import { RecipeModel } from '../models/recipe.js'

export const addRecipe = async (req,res)=>{
    // add recipe to the database 
    const createResult = await RecipeModel.create(req.body)
    //return response
    res.json(createResult);
}

export const getRecipes = (req, res)=>{
    res.send('helloooooo')
}

export const getRecipe = (req,res)=>{
    res.send('GET recipes');
}

export const updateRecipe = (req,res)=>{
    res.send('PATCH recipes');
}

export const deleteRecipe = (req,res)=>{
    res.send('DELETE recepies');
}