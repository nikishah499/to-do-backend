import { Schema, model } from 'mongoose';

const ToDoSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        require: true,
        default: false
    }
});

const ToDoModel = model('todo', ToDoSchema);

export default ToDoModel;