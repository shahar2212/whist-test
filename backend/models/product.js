const { boolean, string, required } = require('joi');
const Joi = require('joi')
const mongoose = require('mongoose');

//the model of the product.
const productSchema = new mongoose.Schema({

    id: { type: String },
    title: { type: String, required: true, minlength: 2, maxlength: 255 },
    price: { type: Number, required: true, minlength: 1, maxlength: 99999 },
    description: { type: String, required: true, minlength: 2, maxlength: 1024 },
    imageUrl: { type: String, required: true, minlength: 11, maxlength: 2048 },
    timesSold: { type: Number, default: 0 },
    timesUniqueSold: { type: Number, default: 0 },
    timesSoldFiveDays: { type: Number, default: 0 },
})

//now mongo knows it has a collection named 'products' with the fields of the productSchema
const Product = mongoose.model('Product', productSchema);

//validation to the product using joi.
function validateProduct(product) {
    const schema = Joi.object({

        id: Joi.string(),
        title: Joi.string().min(2).max(255).required(),
        price: Joi.number().min(1).max(9999).required(),
        description: Joi.string().min(2).max(1024).required(),
        imageUrl: Joi.string().min(2).max(2024).required(),
        timesSold: Joi.number().default(0),
        timesUniqueSold: Joi.number().default(0),
        timesSoldFiveDays: Joi.number().default(0)

    })
    return schema.validate(product)
}

exports.Product = Product;
exports.validateProduct = validateProduct;