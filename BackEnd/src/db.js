const db = {
    users: [
        {id:0,
        username:"admin",
        password:"admin",
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR3y_b__QUXdFpiycdQlmG9PVjch9Bj0eV_fRmEMLNM6DIjbfDUqiAF0NQjPperMStmM&usqp=CAU"
        },
         {id:1,
        username:"long",
        password:"longpass",
        avatar:"http://vegetable-shop.surge.sh/img/broccoli.jpg"
        }
    ],
    products:[
        {
            id:0,
            name:"Broccoli",
            price:3.99,
            img:"http://vegetable-shop.surge.sh/img/broccoli.jpg"
        },
        {
            id:0,
            name:"Carrots",
            price:4.99,
            img:"http://vegetable-shop.surge.sh/img/carrots.jpg"
        },
    ]
}

const findOne = ({username}) => {
    return db.users.find((obj)=>obj.username === username)
}

module.exports = {
    db,
    findOne
}