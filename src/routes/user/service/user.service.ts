import { UserInput } from "../dto/user.input";
import { User } from "../../../../schemas/user.model";
import { hash, genSalt } from "bcrypt";
import generateAuthToken from "../../../../utils/generateAuthToken";
export class UserService {
  static async createUser(userInput: UserInput): Promise<String> {
    let currentUser = await User.findOne({ email: userInput.email });
    if (currentUser) {
      throw new Error("User already exists");
    }
    currentUser = new User(userInput);

    const salt = await genSalt(10);
    currentUser.password = await hash(currentUser.password, salt);
    await currentUser.save();

    const token = generateAuthToken(currentUser);
    return token;
  }

  static async getCurrentUser(userId: String): Promise<UserInput> {
    const currentUser = await User.findById(userId).select("-password");
    if (!currentUser) {
      throw new Error("User not found");
    }
    return currentUser;
  }

  static async getAllUsers(): Promise<UserInput[]> {
    const users = await User.find();
    return users;
  }

  static async deleteUser(userId: String): Promise<UserInput> {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  static async updateUser(userId: String, user: UserInput): Promise<UserInput> {
    const currentUser = await User.findByIdAndUpdate(userId, user, {
      new: true,
    });
    if (!currentUser) {
      throw new Error("User not found");
    }
    return user;
  }
}
