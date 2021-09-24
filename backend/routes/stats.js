const express = require('express');
const { boolean, bool, date } = require('joi');
const { Product, validateProduct } = require('../models/product');
const { Sell, validateSell } = require('../models/sells');
const router = express.Router();

//updating the 'unique times sold' field in mongo. 
//getting the id of the sold item from params, and then incrementing the field of said item by one.
router.put('/:id', async (req, res) => {

    let product = await Product.findOneAndUpdate({ id: req.params.id }, { $inc: { timesUniqueSold: +1 } })
    product = await Product.findOne({ id: req.params.id })
    res.send(product)
})

//updating the 'times sold' field in mongo. 
//getting the id and the quantity of the sold item from params, and then incrementing the field by the quantity number.
router.put('/:id/:quantity', async (req, res) => {
    let product = await Product.findOneAndUpdate({ id: req.params.id }, { $inc: { timesSold: +req.params.quantity } })
    product = await Product.findOne({ id: req.params.id })
    res.send(product)
})

//gets top 5 sold items.
//sorts the order of the products where the item with highest "timesSold" filed is first, and the others after him. then sends only 5 products back
router.get('/', async (req, res) => {
    let products = await Product.find().sort({ "timesSold": -1 }).limit(5);
    res.send(products)
})

//gets top 5 unique sold items.
//similar to the last req.
router.get('/unique', async (req, res) => {
    let products = await Product.find().sort({ "timesUniqueSold": -1 }).limit(5);
    res.send(products)
})

//post the sold items total in-dollars, and saves the date so later i can sort the stats of how much we sold in every day.
router.post('/sells/:total', async (req, res) => {
    const { error } = validateSell(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    let sells = req.params.total;
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let sell = new Sell({

        sell: sells,
        date: date
    })

    let post = await sell.save();
    res.send(post)
})


router.get('/sells', async (req, res) => {

    let sells = await Sell.find()
    res.send(sells);

})

module.exports = router