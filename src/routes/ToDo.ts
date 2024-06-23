import { Router } from 'express';

import {
    listToDoController,
    getSingleToDoRecordController,
    createToDoController,
    updateToDoController,
    deleteToDoController
} from '../controller/ToDo';

export const ToDoRouter = Router();

ToDoRouter.get('/', listToDoController)
    .post('/', createToDoController)
    .get('/:id', getSingleToDoRecordController)
    .put('/:id', updateToDoController)
    .delete('/:id', deleteToDoController);