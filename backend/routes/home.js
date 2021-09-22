const express = require('express');
const { Product, validateProduct } = require('../models/product');
const router = express.Router();

//gets current product by matching the id in the params to the id in mongo.
router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) return res.status(400).send('the product with the given ID was not found.')
    res.send(product);

})

//gets all products
router.get('/', async (req, res) => {
    let products = await Product.find()
    res.send(products);
})

//NEED TO DELETE THIS, IT DUPLICATES THE SAME GET REQ ABOVE
router.get('/:ids', async (req, res) => {
    let products = await Product.findOne({ id: req.params.ids })
    if (!products) return res.status(400).send('the product with the given ID was not found.')
    res.send(products)
})



module.exports = router