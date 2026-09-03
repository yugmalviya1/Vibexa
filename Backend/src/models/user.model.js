const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique: [true,"Username must be unique"]
    },
    email:{
        type:String,
        require:[true,"Email is required"],
        unique:[true, "Email must be unique"]
    },
    password:{
        type:String,
        require:[true,"Password is required"],
        select:false
    }

})

userSchema.pre("save",function (next) { })
userSchema.post("save",function (next) { })

const userModel = mongoose.model("Users", userSchema)

module.exports = userModel