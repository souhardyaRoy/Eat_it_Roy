import { Basecontroller } from "../Controller/basecontroller";
import { IUser, User } from "./user_registration.schema";

class UserController extends Basecontroller<IUser> {}

export const _userController = new UserController(User);