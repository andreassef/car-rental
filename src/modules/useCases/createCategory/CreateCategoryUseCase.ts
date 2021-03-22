import { CategoriesRepository } from "../../cars/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../cars/repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({name, description}: IRequest): void {
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase };