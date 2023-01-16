import pool from "../config/database.js";

const signUp=(data,callBack)=>{
  pool.query(
    `insert into users(username,email,password)
          values(?,?,?)`,
          [
            data.username,
            data.email,
            data.password
          ],
          (error,results,fields)=>{
            if(error) return callBack(error);
            return callBack(null,results)
          }
  )
}
/**
 * 
 * @param {*} callBack 
 */
const getAllUsers=(callBack)=>{
  pool.query(`select * from users`,[],(error,results,fields)=>{
    if(error) return callBack(error)
    return callBack(null,results)
  })
}
const signIn=async(email,callBack)=>{
  pool.query(`
        select * from users where email=?`,
        [email], 
        (error,results)=>{
          if(error){
            return callBack(error)
          } else{
            return callBack(null,results)
          }
        }
        )
}

export {signUp, signIn ,getAllUsers}