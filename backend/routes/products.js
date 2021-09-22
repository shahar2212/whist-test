const express = require('express');
const { boolean, bool } = require('joi');
const { Product, validateProduct } = require('../models/product');
const router = express.Router();

//generate id function
let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

//gets current product by matching the id in the params to the id in mongo.
router.get('/:id', async (req, res) => {

    const product = await Product.findOne({ _id: req.params.id });
    if (!product) return res.status(400).send('the product with the given ID was not found.')

    res.send(product);
})

//edit the product where id from params matches id from mongo
router.put('/:id', async (req, res) => {

    const { error } = validateProduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body);
    if (!product) return res.status(404).send('the product with the given ID was not found.');

    product = await Product.findOne({ _id: req.params.id });
    res.send(product);
})

//post a new product.
router.post('/', async (req, res) => {
    const { error } = validateProduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let product = new Product({

        id: guid(),
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    })

    let post = await product.save();
    res.send(post)
})

//gets all products.
router.get('/', async (req, res) => { //gets all products
    const products = await Product.find();
    res.send(products)
})

//delete product by matching params id with mongo id.
router.delete('/delete/:productID', async (req, res) => { 
    const products = await Product.findOneAndRemove({ _id: req.params.productID });
    res.send(products)
})

module.exports = router;