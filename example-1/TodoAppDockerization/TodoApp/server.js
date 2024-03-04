import express from "express";
import dotenv from "dotenv"

import {connectToDb} from "./cfg/Db.js"
import {toDoRouter} from "./router/ToDoRouter.js";

dotenv.config()

const app = express()
const PORT = process.env.APP_PORT || 5000


app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use('/todo/', toDoRouter);
app.use('/todo/', toDoRouter);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDb();
});