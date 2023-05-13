const joi = require("joi") // module for validating inputs
const validateUserInput = (req, res, next) =>{
    const schema = joi.object({
        username: joi.string().required().min(6), // checking username
        password: joi.string().required().min(8) // checking password
    })

    const {error} = schema.validate(req.body) 
    if(error) {
        return res.status(400).json({status: 400, errorMessage: error.details[0].message})
    }
    next()
}
module.exports = validateUserInput