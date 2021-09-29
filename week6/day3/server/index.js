require("dotenv").config();
const express = require("express");
const token = process.env.API_TOKEN;
const url = process.env.supabaseUrl
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(url,token);
const app = express();
app.use(express.json());
const PORT = 3000;

app.post("/addStock", async (req, res) => {
    console.log(req.body);
    const { data, error } = await supabase.from("stockInfo").insert([req.body]);
    res.send(console.log(`the user is ${req.body.name}`));
});

app.delete("/deleteStock/:stocksID", async(req,res)=>{
    const id = req.params.stocksID;
        const { data, error } = await supabase.from("stockInfo").delete().match({ id : id })
      res.send(data)
    })

app.get("/getData", async(req,res) => {
    const { data, error } = await supabase.from("stockInfo").select();
    res.send(console.log(data));
});

app.put("/updateData/:stocksID", async(req,res) =>{
    const id = req.params.stocksID;
        const { data, error } = await supabase.from("stockInfo").update(req.body).match({id : id })
})

app.listen(PORT, console.log(`listening on ${PORT}`))
