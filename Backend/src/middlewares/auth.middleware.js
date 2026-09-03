const blacklistModel = require('../models/blacklist.model')
const redis = require('../config/cache')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

async function authUser(req,res,next) {
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"token not provided"
        })
    }

    const isTokenBlacklisted = await redis.get({
        token
    })

    if(isTokenBlacklisted){
        return res.status(401).json({
            message:"invalid token"
        })
    }


    console.log(token)
    
    try{

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = decoded
    }catch(err){
        return res.status(401).json({
            message:"invalid token"
        })
    }
}

module.exports = {authUser}