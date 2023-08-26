const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//api test
app.get('/', (req,res)=>{
    res.json({
        message: "API - My own api test"
    })
})


//routes linked
const userRoute = require('./routes/userRoute.js')
app.use('/users', userRoute)


const PORT = process.env.PORT
//listen
app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
})

