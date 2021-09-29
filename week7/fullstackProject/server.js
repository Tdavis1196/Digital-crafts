require("dotenv").config();
const express = require("express");
// require customers
const {fuber_orders}= require("./models")
const {fuber_customers} = require("./models");
const {fuber_restaurants} = require("./models");
const bcrypt = require("bcrypt");
const sequelize = require("sequelize");
const cors = require("cors");
//require cors
const app = express();
const PORT = 3118;

app.use(express.json());
app.use(cors());
// npm i cors ,install cors and do
// app.use(cors())

app.post("/create_customer", async (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    // grab the column names from the req.body
    const customer = await fuber_customers.create({
        firstName,
        lastName,
        email,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send(`New user created: ${customer}`)}
    // )}
);

app.get("/get_restaurants", async (req,res) => {
    const restaurants = await fuber_restaurants.findAll();
    res.send(restaurants);
});

app.post("/create_order", async (req,res) => {
    const {restaurant_name, restaurant_id, mealImg, restaurant_order} = req.body;
    const order = await fuber_orders.create({
        restaurant_name:"",
        restaurant_id:req.body.id,
        restaurant_order: "",
        mealImg: "",
        createdAt: new Date(),
        updatedAt: new Date(),

    });
    res.send(`New user created: ${order}`)}
);

app.get("/get_orders", async (req,res) => {
    const orders = await fuber_orders.findAll();
    res.send(orders);
});


// app.post("/get_todos", async (req, res) => {
//     const todos = await todoList.findAll();
//     res.send(todos);
// });

// app.post("/update_todo/:id", async (req, res) => {
//     const updatetodo = await todoList.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(updatetodo);
//   });
  
//   app.post("/delete_todo/:id", async (req, res) => {
//     const deletetodo = await todoList.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send("To Do has been deleted");
//   });
  


app.listen(PORT,console.log(`Listening on Port ${PORT}`));