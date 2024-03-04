import express from "express";

const toDoRouter = express.Router();

import { addTodo, deleteTodo, getAllToDo } from "../controller/TodoController.js";

toDoRouter.get('/', getAllToDo);
toDoRouter.delete('/:id', deleteTodo);
toDoRouter.post('/', addTodo);

export { toDoRouter }