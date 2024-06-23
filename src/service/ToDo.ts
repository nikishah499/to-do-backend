import ToDo from '../model/ToDo';

import { ToDoRecordType } from '../types/ToDoTypes';

export const listToDos = async () => {
    try {
        const records = await ToDo.find();
        return records;
    } catch (error) {
        console.log('something went wrong while retreiving todos', error);
        throw error;
    }
}

export const getSingleToDoRecord = async (id: string) => {
    try {
        const records = await ToDo.findById(id);
        return records;
    } catch (error) {
        console.log(`something went wrong while retreiving todo record [${id}]`, error);
        throw error;
    }
}

export const createToDo = async (data: ToDoRecordType) => {
    try {
        const record = await ToDo.create(data);
        return record;
    } catch (error) {
        console.log('something went wrong while creating todo record', error);
        throw error;
    }
}

export const updateToDo = async (id: string, data: ToDoRecordType) => {
    try {
        const record = await ToDo.findByIdAndUpdate(id, data, { new: true });
        return record;
    } catch (error) {
        console.log(`something went wrong while updating todo record [${id}]`, error);
        throw error;
    }
}

export const deleteToDo = async (id: string) => {
    try {
        const record = await ToDo.deleteOne({ _id: id });
        return record;
    } catch (error) {
        console.log(`something went wrong while deleting todo record [${id}]`, error);
        throw error;
    }
}