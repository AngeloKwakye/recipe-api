import { Router } from "express";
import multer from "multer";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";
import { MulterSaveFilesOrgStorage } from "multer-savefilesorg-storage";
import dotenv from 'dotenv';

dotenv.config();
//Configure upload middleware
// const upload = multer({ dest: 'uploads/images' })
const upload = multer({
    storage: MulterSaveFilesOrgStorage({
        serverPath: `https://savefiles.org/api/v1/uploads`,
        apiAccessToken: process.env.SAVEFILE_API,
        relativePath: '/recipes/images/*'
    }),
    preservePath: true
})

//create recipes router
const router = Router();


router.get('/', getRecipes)

router.post('/', upload.single('image'), addRecipe);

router.get('/:id', getRecipe)

router.patch('/:id', updateRecipe)

router.delete('/:id', deleteRecipe)


export default router;