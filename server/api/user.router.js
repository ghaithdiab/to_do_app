import  {createUser, getAll ,login}  from './user.controller.js';
import express from 'express';

const userRouter=express.Router();

userRouter.post('/register', createUser);
userRouter.get('/getAllUsers',getAll);
userRouter.get('/login',login);
export  default userRouter