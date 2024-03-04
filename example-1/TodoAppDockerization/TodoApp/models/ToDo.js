import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: {
        type: String,
        required: [true, 'Please add description']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    }
}, {
    timestamps: true
});

const ToDo = mongoose.model('ToDoModel', todoSchema)

export { ToDo }