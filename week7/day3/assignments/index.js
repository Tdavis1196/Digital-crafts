const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3011;
app.use(express.json());
app.use(cors());
require('dotenv').config()

const { todoList } = require("./server/models");


const Sequelize = require("sequelize");

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.post("/create_todo", async (req,res) => {
    const { todoName } = req.body;
    const newTodo = await todoList.create({
        todoName: todoName
    });
    res.send(`Inserted new To Do: ${newTodo}`)}
);

app.post("/get_todos", async (req, res) => {
    const todos = await todoList.findAll();
    res.send(todos);
});

app.post("/update_todo/:id", async (req, res) => {
    const updatetodo = await todoList.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send(updatetodo);
  });
  
  app.post("/delete_todo/:id", async (req, res) => {
    const deletetodo = await todoList.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("To Do has been deleted");
  });
  
app.listen(PORT,console.log(`Listening on Port ${PORT}`));
