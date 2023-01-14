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

const signIn=(id,callBack)=>{
  pool.query(`
        select * from users where id=?`,
        [id], 
        (error,results,fields)=>{
          if(error) return callBack(error)
          return callBack(null,results[0])
        }
        )
}

export {signUp, signIn}