import { Router, Request, Response } from 'express';
import { ToDoRouter } from './ToDo';

export const AppRouter = Router();

AppRouter.get('/health-check', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Ok...!'});
});

AppRouter.use('/todos', ToDoRouter);