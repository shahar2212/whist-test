const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const cors = require('cors');

const products = require('./routes/products');
const home = require('./routes/home');
const stats = require('./routes/stats')

mongoose.connect('mongodb://mongo:27017/Whist').then(() => console.log('MongoDB Connected'));

app.use(cors());
app.use(express.json());//convert income into literal ob, and outcome to json

app.use('/api/admin', products);
app.use('/api/home', home);
app.use('/api/stats', stats)

const port = 5000;
http.listen(port, (console.log(`listening to port ${port}`)))