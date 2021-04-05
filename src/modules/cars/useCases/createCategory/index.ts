import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

// const categoriesRepository = CategoriesRepository.getInstance();

// const categoriesRepository = new CategoriesRepository();

// const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

// const createCategoryController = new CreateCategoryController(
//   createCategoryUseCase
// );

// export { createCategoryController, categoriesRepository };

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
};
