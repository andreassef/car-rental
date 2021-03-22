import { request, response, Router } from "express";
import {v4 as uuidV4} from 'uuid';
import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryUseCase } from "../modules/useCases/createCategory/CreateCategoryUseCase";
import { createCategoryController, categoriesRepository } from "../modules/useCases/createCategory/index"
import { listCategoriesController } from "../modules/useCases/listCategories";

const categoriesRoutes = Router();

// const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

// categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };