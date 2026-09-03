const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("error connecting to db",err)
    })
}

module.exports = connectToDb;