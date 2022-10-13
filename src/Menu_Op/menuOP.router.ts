
import express, { Router } from 'express';
import { _menuController } from './menuOP.controller';
import { smartValidator } from './menuOP.validator';

const menuOP_router: Router = express.Router();

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

menuOP_router
    .get('/all', (req, res) => _menuController.find(res, {}))
    .post('/',smartValidator, (req, res) => _menuController.create(res, req.body))
    .put('/:id', (req, res) => _menuController.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _menuController.delete(res, req.params.id))

export { menuOP_router };