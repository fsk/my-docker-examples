import { ToDo } from "../models/ToDo.js"

const addTodo = (async (req, res) => {
    const { todo, description } = req.body;
    const existTodo = await ToDo.findOne({todo});
    if (existTodo != null) {
        res.status(400);
        throw new Error("This todo already exist");
    }

    const saveTodo = await ToDo.create({
        todo,
        description
    });

    res.status(201).json({
        message: "ToDo create successfully"
    });
});

const deleteTodo = (async (req, res) => {
    const id = req.params.id;
    const existTodo = await ToDo.findById(id);
    if (!existTodo) {
        res.status(404);
        throw new Error('ToDo not found');
    }

    await ToDo.deleteOne(id);
    res.status(200).json({
        message: "Delete ToDo"
    })
});


const getAllToDo = (async (req, res) => {
    const todoList = await ToDo.find();
    res.status(200).json(todoList);
});

export  {
    addTodo,
    deleteTodo,
    getAllToDo
}