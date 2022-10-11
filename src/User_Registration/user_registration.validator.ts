import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { http_formatter } from "../util";
import { userValidator } from "./user_registration.schema";

export const createValidator = (req: Request, res: Response, next: NextFunction) => {
    const isValid = userValidator.parse(req.body);
    if(!isValid) {
        return res.status(StatusCodes.BAD_REQUEST).json(http_formatter({}, 'All felids are mandatory', false))
    }
    next();
}


