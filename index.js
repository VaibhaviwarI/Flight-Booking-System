const dotenv = require('dotenv')
dotenv.config();
const express = require('express')

const { Logger} = require('./src/config')


const app = express();

const PORT = process.env.PORT



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
    Logger.info("Successfully started the server",  {})
})