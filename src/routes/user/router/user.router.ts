import express, { Request, Response, Next } from "express";
const router = express.Router();
import { UserService } from "../service/user.service";
import userValidation from "../validation/userValidation";
import returnResponse from "../../../../utils/returnResponse";
import { auth } from "../../../../middleware/auth";

router.post("/", userValidation, async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    return returnResponse(200, "User created successfully", user, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Retrieving User",
      err,
      res
    );
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    return returnResponse(200, "Users retrieved successfully", users, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Retrieving Users",
      err,
      res
    );
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await UserService.getCurrentUser(req.params.id);
    return returnResponse(200, "User retrieved successfully", user, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Retrieving User",
      err,
      res
    );
  }
});

router.put("/:id", auth, async (req: Request, res: Response) => {
  try {
    const user = await UserService.updateUser(req.params.id);
    return returnResponse(200, "User updated successfully", user, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Updating User",
      err,
      res
    );
  }
});

router.delete("/:id", auth, async (req: Request, res: Response) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    return returnResponse(200, "User deleted successfully", user, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Deleting User",
      err,
      res
    );
  }
});
