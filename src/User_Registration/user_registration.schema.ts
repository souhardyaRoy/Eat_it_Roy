import { Document, model, Schema } from "mongoose";
import {z} from 'zod';



export const userValidator = z.object({
    userName: z.string().min(2).max(50),
    address: z.object({
        line1: z.string(),
        state: z.string(),
        pin: z.number()
      }),
   phoneNo: z.number()
})

export type User = z.infer<typeof userValidator>;

export interface IUser extends Document, User {}

const taskSchema = new Schema<IUser>({
    userName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    address: {
        Type: Object,
        required: false,
        line1: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            default: "",
        }, 
        pin: {
            type: Number,
            default: -1,
        },
    },phoneNo:{}},
  {
    versionKey: false,
    timestamps: false
});

export const User = model<IUser>('Task', taskSchema);