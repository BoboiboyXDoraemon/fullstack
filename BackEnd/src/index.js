require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { request } = require('express')
const app = express()
console.log()
const {db, findOne} = require('./db.js');
app.use(cors())
app.use(express.json())
const jwt = require('jsonwebtoken')


app.get("/", (request, respond)=>{
    respond.json(db.products)
})

app.get("/users",(request, respond)=>{
    respond.json(db.users)
})

app.post("/login", (request,respond) =>{
    const user = findOne({username: request.body.username})
    if (user && user.password === request.body.password) {
        const token = jwt.sign(user.username,process.env.TOKEN_SECRET)
        respond.json(...user,token);
    } else {
        respond.status(404).json({error: "not user"})
    }

})
app.listen(3000)