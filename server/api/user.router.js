import  {createUser, getAll}  from './user.controller.js';
import express from 'express';

const userRouter=express.Router();

userRouter.post('/register', createUser);
userRouter.get('/getAllUsers',getAll);
export  default userRouter