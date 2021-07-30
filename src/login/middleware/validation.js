const Joi = require('joi');

function validateFields(bodyData){
    const schema = Joi.object({
        UserName : Joi.string().min(5).required(),
        UserEmail : Joi.string().email({ tlds: { allow: false } }).required(),
        UserPhone : Joi.number().min(10).required()

    })
    return schema.validate(bodyData,{allowUnknown:true})
}




exports.validate = validateFields;
