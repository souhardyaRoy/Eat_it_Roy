
import { Document, model, Schema } from "mongoose";
import { z } from "zod"

const menu_enum = ['chinies thali','bengali thali','punjabi thali'] as const
export const menuValidator = z.object({
    cuisine : z.enum(menu_enum),
    quantity : z.number().default(1)
})
export type Menu = z.infer<typeof menuValidator>
export interface IMenu extends Document, Menu {}

const menuSchema = new Schema<IMenu>({
    cuisine:{
        enum: menu_enum,
        required: true
    },
    quantity:{
      type: Number,
      default:1
    }
   }, {
    versionKey: false,
    timestamps: false
});

export const MenuSchema = model<IMenu>('Menu', menuSchema);
