import express from 'express';

const app=express();

app.get('/api',(req,res)=>{
  res.json({
    secsuss:1,
    message:'connected'
  })
})

app.listen(process.env.APP_PORT,()=>{
  console.log('server connected succsfuly')
})