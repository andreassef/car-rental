import { request, response, Router } from "express";
import {v4 as uuidV4} from 'uuid';
import { Category } from "../model/Category";
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from "../service/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    createCategoryService.execute({name, description})
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const list = categoriesRepository.list();
    return response.status(200).json(list);
});

export { categoriesRoutes };