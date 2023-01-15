import { genSaltSync, hashSync } from "bcrypt";
import { signUp ,signIn ,getAllUsers} from "./user.service.js";
import { registerValidation } from "../validation.js";


const getAll= async(req,res)=>{
  getAllUsers((error,results)=>{
    if(error) {
      console.log(error)
      return res.status(400).json({
        success:0,
        message:error
      })
    }
    return res.status(200).json({
      success:1,
      message:results
    })
  })
}
const createUser =async (req,res)=>{
    // checking validation
    const {error}= registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
      //hash password and create new user 
    const salt=await genSaltSync(10);
    const newUser={
      username:req.body.username,
      email:req.body.email,
      password:hashSync(req.body.password,salt)
    }
    signUp(newUser,(error,results)=>{
      if(error){
        console.log(error)
        return res.status(400).json({
          success:0,
          message: error
        })
      }
      return res.status(200).json({
        success:1,
        message:results
      })
    })
    }


export  {createUser, getAll}