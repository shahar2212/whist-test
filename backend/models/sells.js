const { boolean, string, required, date } = require('joi');
const Joi = require('joi')
const mongoose = require('mongoose');

//the model of the sells.
const sellsSchema = new mongoose.Schema({
    sell: { type: Number, minlength: 1, maxlength: 99999 },
    date: { type: String }
})

//now mongo knows it has a collection named 'sells'
const Sell = mongoose.model('Sells', sellsSchema);

//validation for the sells.
function validateSell(sell) {
    const schema = Joi.object({

        sell: Joi.number().min(1).max(9999),
        date: Joi.string()
    })
    return schema.validate(sell)
}

exports.Sell = Sell;
exports.validateSell = validateSell;