const dotenv = require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.LOCAL_DB,
    process.env.USER_DB,
    process.env.PASSWRD,
    {
        host:process.env.HOST,
        dialect: 'mysql',
        operatorsAliases: false,
        pool:{
            min:0,
            max:5,
            acquire:30000,
            idle:10000
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('DB connected')
})
.catch(err=>{
    console.log('Error on db: '+err)
})


const db= {}

db.Sequelize = Sequelize
db.sequelize = sequelize


//models linked
db.users = require('../models/userModel.js')(sequelize, DataTypes)




db.sequelize.sync({force:true})
.then(()=>{
    console.log('Resync on DB done!')
})


module.exports= db


//https://stackoverflow.com/questions/60027118/import-large-data-from-json-file-to-mysql-database-using-sequelize