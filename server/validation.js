import Joi from  '@hapi/joi'

// Checking data registration
const  registerValidation=(data)=>{
  console.log(data)
  const schema=Joi.object({
    username:Joi.string().min(3).required(),
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required()
  })
  const validate= schema.validate(data);
  return validate
}


export{registerValidation}