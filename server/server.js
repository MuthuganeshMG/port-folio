const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const path=require('path');
const connectDatabase = require('./config/connection');
const router = require('./routes/userRoute');

dotenv.config({path:path.join(__dirname,'config','.env')});

const app=express();
connectDatabase();
 
app.use(express.json());
app.use(cors()); 

app.use('/api/user',router);

const port=process.env.PORT;
const host=process.env.NODE_ENV; 

app.listen(port,()=>{
    console.log(`app is listening on port ${port} in ${host}`);
});