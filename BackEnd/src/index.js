const express = require("express")
const app = express()
const user =[
    {
        id:0,
        username:"admin",

    }
]
app.get("/",(req,res)=>{
    res.send("Home")
})
app.get("/users",(req,res)=>{
    res.send(user)
})
app.listen(3000)