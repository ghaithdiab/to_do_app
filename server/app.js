import express from 'express';
import "dotenv/config.js"
import userRouter  from './api/user.router.js';

// dotenv.config();
const app=express();
app.use(express.json());
app.use('/home',userRouter);

app.listen(process.env.APP_PORT,()=>{
  console.log('server connected succsfuly')
})