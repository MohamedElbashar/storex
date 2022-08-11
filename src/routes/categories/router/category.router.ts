import express, { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { CategoryInput } from "../dto/category.input";
import returnResponse from "../../../../utils/returnResponse";
import { auth } from "../../../../middleware/auth";
import categoryValidation from "../validation/categoryValidation";

const router = express.Router();

router.post(
  "/",
  [auth, categoryValidation],
  async (req: Request, res: Response) => {
    try {
      const category = await CategoryService.createCategory(req.body);
      return returnResponse(
        200,
        "Category created successfully",
        category,
        res
      );
    } catch (err) {
      return returnResponse(
        400,
        "There Is An Error While Retrieving Category",
        err,
        res
      );
    }
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await CategoryService.getAllCategories();
    return returnResponse(
      200,
      "Categories retrieved successfully",
      categories,
      res
    );
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Retrieving Categories",
      err,
      res
    );
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.getCurrentCategory(req.params.id);
    return returnResponse(
      200,
      "Category retrieved successfully",
      category,
      res
    );
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Retrieving Category",
      err,
      res
    );
  }
});

router.put("/:id", auth, async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.updateCategory(req.params.id);
    return returnResponse(200, "Category updated successfully", category, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Updating Category",
      err,
      res
    );
  }
});

router.delete("/:id", auth, async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.deleteCategory(req.params.id);
    return returnResponse(200, "Category deleted successfully", category, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Deleting Category",
      err,
      res
    );
  }
});

export default router;
