const express = require("express");
const app = express()
const port = 3000

function sayHello(req,res)
{
    const name = req.query.name;
    res.send("hello fuka "+name);
}


app.get("/yourname", sayHello)

app.post("/thisispost", (req,res) => {
    res.send("this is post")
})

function started()
{
    console.log("Server is running on port " + port)
}   
app.listen(port, started)