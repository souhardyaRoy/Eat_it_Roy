import { Router } from "express";
import { user_registration_router } from "../User_Registration/user_resgistration.router";


export const allRoutes: Record<string, Router> = {
    'user' : user_registration_router
}
