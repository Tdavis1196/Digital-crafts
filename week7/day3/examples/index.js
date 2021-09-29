const Sequelize = require("sequelize");
const { Users } = require("./models");
const express = require("express");
const app = express();
const PORT = 3011;

app.use(express.json())

app.post("/create_users", async(req,res) => {
    const { firstName, lastName, email } = req.body

    const newUser = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });
    res.send(`Inserted newUser with ${newUser.firstName} ${newUser.id}`);
})

app.post("/get_users", async(req,res) => {
     const users = await Users.findAll();
    res.send(users);
})


app.listen(PORT,`Listening on Port ${PORT}`);
