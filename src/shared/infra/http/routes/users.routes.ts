import { ProfileUserController } from "@modules/cars/useCases/ProfileUser/ProfileUserController";
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCases/updateUseravatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUsersController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

usersRoutes.post("/", createUsersController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

usersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);

export { usersRoutes };
