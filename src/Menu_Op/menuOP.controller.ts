import { Basecontroller } from "../Controller/basecontroller";
import { IMenu,  MenuSchema } from "./menuOP.schema";

class menuController extends Basecontroller<IMenu> {}

export const _menuController = new menuController(MenuSchema);