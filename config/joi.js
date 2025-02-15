const Joi = require('joi')

const validateSchema = (book) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        year: Joi.number().required().min(1800).max(2050),
        genre: Joi.array().items(Joi.string()).required()
    })
    return schema.validate(book)
}

module.exports = validateSchema

