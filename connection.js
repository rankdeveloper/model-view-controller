const mongoose = require('mongoose')

async function mongodbConnect(url){
    return mongoose.connect(url)
}
// mongoose.connect("mongodb://127.0.0.1:27017/first")
//     .then(() => console.log("mongodb connected..."))
//     .catch(() => console.log("mongodb not connected"))

module.exports ={mongodbConnect}