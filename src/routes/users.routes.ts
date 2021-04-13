import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/CreateUserController";

const usersRoutes = Router();

const createUsersController = new CreateUserController();

usersRoutes.post("/", createUsersController.handle);

export { usersRoutes };