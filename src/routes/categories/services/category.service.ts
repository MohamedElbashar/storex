import { CategoryInput } from "../dto/category.input";
import { Category } from "../../../../schemas/category.model";

export class CategoryService {
  static async createCategory(categoryInput: CategoryInput): Promise<Category> {
    let currentCategory = await Category.findOne({
      title: categoryInput.title,
    });
    if (currentCategory) {
      throw new Error("Category already exists");
    }
    currentCategory = new Category(categoryInput);
    await currentCategory.save();
    return currentCategory;
  }

  static async getAllCategories(): Promise<Category[]> {
    const categories = await Category.find({});
    return categories;
  }

  static async getCurrentCategory(categoryId: String): Promise<Category> {
    const currentCategory = await Category.findById(categoryId);
    if (!currentCategory) {
      throw new Error("Category not found");
    }
    return currentCategory;
  }

  static async updateCategory(
    categoryId: String,
    categoryInput: CategoryInput
  ): Promise<Category> {
    const category = await Category.findByIdAndUpdate(
      categoryId,
      categoryInput,
      { new: true }
    );
    if (!category) {
      throw new Error("Category not found");
    }
    return category;
  }
  static async deleteCategory(categoryId: String): Promise<Category> {
    const category = await Category.findByIdAndRemove(categoryId);
    if (!category) {
      throw new Error("Category not found");
    }
    return category;
  }
}
