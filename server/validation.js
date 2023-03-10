import Joi from  '@hapi/joi'

// Checking data registration
const  registerValidation=(data)=>{
  const schema=Joi.object({
    username:Joi.string().min(3).required(),
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required()
  })
  return schema.validate(data);
  
}

const loginValidation=(data)=>{
  const schema=Joi.object({
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required()
  })
  return schema.validate(data);

}


export{registerValidation,loginValidation}