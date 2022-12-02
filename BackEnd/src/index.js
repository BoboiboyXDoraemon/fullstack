const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
const db={
    user :[
        {
            id:0,
            username:"admin",
            password:"admin"
        },
        {
            id:1,
            username:"huy",
            password:"konodioda"
        }
    ],
    products:[
        {
            id:0,
            name:"Broccoli",
            price:3.99,
            img:"https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
        },
        {
            id:1,
            name:"Broccoli",
            price:3.99,
            img:"https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
        }
    ]
}

app.get("/",(req,res)=>{
    res.json(db.products)
})

app.get("/users",(req,res)=>{
    res.json(db.user)
})
app.listen(3000)