
import express, { Router } from 'express';
import { _userController } from './user_registration.controller';
import { createValidator } from './user_registration.validator';

const user_registration_router: Router = express.Router();

/*
    ============== old method =====================
    studentRouter.get('/all', getAllStudents)
    studentRouter.get('/:student_id', getAllStudents)
    studentRouter.post('/', ()=>{});
    studentRouter.put('/', ()=>{});
    studentRouter.delete('/', ()=>{});
*/

// new classic and sexy method.

// ! there's still a major issue that exist in the API, please find that...
// ! it's can be critical to server health.

user_registration_router
    .get('/all', (req, res) => _userController.find(res, {}))
    .post('/',createValidator, (req, res) => _userController.create(res, req.body))
    .put('/:id', (req, res) => _userController.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _userController.delete(res, req.params.id))

export { user_registration_router };