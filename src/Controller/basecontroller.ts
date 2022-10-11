import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Document, Model, ObjectId } from "mongoose";
import { http_formatter } from "../util";

export class Basecontroller<T>{

 private DEFAULT_ERROR_MSG: string = 'Something went wrong';
public model:Model<T>
constructor(model:Model<T>){
this.model = model
}
public async find(res: Response, query: any){
    try {
        const queriedRes = await this.model.find(query);
        return res.status(StatusCodes.OK).json(http_formatter(queriedRes));
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error, this.DEFAULT_ERROR_MSG, false));
    }
}
public async create(res: Response, document: Document<T>){
    try {
        const createdDoc = await this.model.create(document);
        return res.status(StatusCodes.CREATED).json(http_formatter(createdDoc))
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error, this.DEFAULT_ERROR_MSG, false));
    }
}

public async update(res: Response, id: ObjectId | string, document: any) {
    try {
        const updatedDocument = await this.model.findByIdAndUpdate(id, document);
        return res.status(StatusCodes.OK).json(http_formatter(updatedDocument))
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error, this.DEFAULT_ERROR_MSG, false));
    }
}

public async delete(res: Response, id: ObjectId | string){
    try {
        // ! we should 'NEVER' delete an entry from the DB!
        const updatedDocument = await this.model.findByIdAndUpdate(id, {isDeleted: true});
        return res.status(StatusCodes.OK).json(http_formatter(updatedDocument))
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error, this.DEFAULT_ERROR_MSG, false));
    }
}
 
}