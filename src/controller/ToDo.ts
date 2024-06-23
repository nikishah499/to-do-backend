import { Request, Response, NextFunction } from 'express';
import {
    listToDos,
    getSingleToDoRecord,
    createToDo,
    updateToDo,
    deleteToDo
} from '../service/ToDo';

export const listToDoController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const toDoList = await listToDos();
        if (toDoList.length) {
            return res.status(200).json(toDoList);
        }
        return res.sendStatus(204);
    } catch(error) {
        return next(error);
    }
}

export const getSingleToDoRecordController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const record = await getSingleToDoRecord(id);
        if (record) {
            return res.status(200).json(record);
        }
        return res.sendStatus(404);
    } catch(error) {
        return next(error);
    }
}

export const createToDoController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = req.body;
        const NewRcord = await createToDo(data);
        return res.status(201).json(NewRcord);
    } catch(error) {
        return next(error);
    }
}

export const updateToDoController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { data } = req.body;
        const updatedRecord = await updateToDo(id, data);
        return res.status(200).json(updatedRecord);
    } catch(error) {
        return next(error);
    }
}

export const deleteToDoController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await deleteToDo(id);
        return res.sendStatus(200);
    } catch(error) {
        return next(error);
    }
}