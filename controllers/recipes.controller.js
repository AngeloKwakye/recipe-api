import { RecipeModel } from '../models/recipe.js'

export const addRecipe = async (req, res, next) => {
    try {
        // add recipe to the database 
        console.log(req.file);
        const createResult = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        })
        //return response
        res.status(201).json(createResult);
    } catch (error) {
        // forward to express error handler
        next(error);
    };
}


export const getRecipes = async (req, res, next) => {
    try {
        const recipes = await RecipeModel.find({});
        res.json({ data: recipes });
    } catch (error) {
        next(error)
    }

}

export const getRecipe = async (req, res, next) => {
    try {
        const recipe = await RecipeModel.findById(req.params.id);
        if (!recipe) {
            res.status(404).json({ 
                message: `Recipe with object id: ${req.params.id} not found!` 
            });
        }
        res.json({ data: recipe });
    } catch (error) {
        next(error);
    }
    // res.send('GET recipes');
}

export const updateRecipe = (req, res) => {
    res.send('PATCH recipes');
}

export const deleteRecipe = (req, res) => {
    res.send('DELETE recepies');
}