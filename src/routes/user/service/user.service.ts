import { UserInput } from "../dto/user.input";
import { User } from "../../../../schemas/user.model";
import { bcrypt } from "bcrypt";
export class UserService {
  static async createUser(userInput: UserInput): Promise<UserInput> {
    let currentUser = await User.findOne({ email: userInput.email });
    if (currentUser) {
      throw new Error("User already exists");
    }
    currentUser = new User(userInput);

    const salt = await bcrypt.genSalt(10);
    currentUser.password = await bcrypt.hash(currentUser.password, salt);
    await currentUser.save();

    const token = currentUser.generateAuthToken();
    return token;
  }

  static async getCurrentUser(userId: String): Promise<User> {
    const currentUser = await User.findById(userId).select("-password");
    if (!currentUser) {
      throw new Error("User not found");
    }
    return currentUser;
  }

  static async getAllUsers(): Promise<User[]> {
    const users = await User.find();
    return users;
  }

  static async deleteUser(userId: String): Promise<User> {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  static async updateUser(userId: String): Promise<User> {
    const user = await User.findByIdAndUpdate(userId, user, { new: true });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
