const db = require('../config/dbConfig.js')

//create main model

const User = db.users

const getAllUsers = async (req,res)=>{

    const users = await User.findAll({})

    if(users.length>0){
        res.status(200).json({
            message:"Here are all the users",
            users
        })

    }else{
        res.status(400).json({
            message:"No users found on DB"
        })
    }

}


module.exports = {
    getAllUsers
}