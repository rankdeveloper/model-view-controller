const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const User = require('./models/user')
const userRouter = require('./routes/user')
const { mongodbConnect } = require('./connection')
const fs = require('fs')
const {logger} = require('./middleware/index')
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('views' , path.join(__dirname , "views"))
app.set('view engine' , 'ejs')


mongodbConnect("mongodb://127.0.0.1:27017/first")
    .then(() => console.log("mongodb connected..."))
    .catch(() => console.log("mongodb not connected"))


// app.get('/new' , (req , res) => {
//     const people = ["Rohit" , "Kohli" , "Shivam"]
//     res.render("Users" , {people:people})
// })

// app.use(logger)
app.use("/user", userRouter)
app.get("*" , (req , res) => {
    res.json({msg:"page not found"})
})


app.listen(2000, (err) => {
    if (err) {
        console.log("error")
    }
    console.log("App is running on port 2000")
})

