import { exit } from "process";
import { IEnv } from "./types";
import { IEnvironmentType } from "./types";

export const env = (): IEnv => {
  // explicit typecasting - parseInt() : js 
  const _environment:IEnvironmentType = <IEnvironmentType>process.env?.ENVIRONMENT || 'development';

  if (_environment === 'development') return require("./environment/dev.env"); 
  
  else {
    console.log(`
      Error.Shell variable ENVIRONMENT not set.
      Acceptable values are 'development' | 'production'
    `);
    exit(1); 
  }
};