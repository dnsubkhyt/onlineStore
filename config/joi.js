const Joi = require('joi')

const validateUserSchema = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        address: Joi.string()
    })
    return schema.validate(user)
}

const validateProductSchema = (product) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required().min(0),
        stock: Joi.number().required().min(0).max(10000),
        category: Joi.array().items(Joi.string()).required().min(1),
        description:Joi.string().required()
    })
    return schema.validate(product)
}
const validateTransactionSchema = (transaction) => {
    const schema = Joi.object({
        userId: Joi.string().required(), 
        productId: Joi.string().required(),
        quantity: Joi.number().min(1).required()
    })
    return schema.validate(transaction)
}

module.exports = {validateUserSchema, validateProductSchema, validateTransactionSchema}