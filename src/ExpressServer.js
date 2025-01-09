import express from 'express';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
import { connectDB } from './config/dbConfig.js';

const app=express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/api',apiRouter);

app.all("*",(req,res)=>{
    res.status(404).json({
        message:'Not fount'
    });
});

app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`);
    connectDB();
})