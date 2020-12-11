const express = require('express');

const productRoutes = require('./router/products')
const orderRoutes = require('./router/orders')
const userRoutes = require('./router/user')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const config = require('./config/index')
const url = 'mongodb://localhost:27017/onlineshoppingcart'
mongoose.connect(url, {
  useNewUrlParser : true,
  useUnifiedTopology: true

});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

/** Setting up server to accept cross-origin browser request */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST,PUT,DELETE,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Origin', config.clientUrl);
  res.setHeader('Access-Control-Allow-Headers', 'Origin,Content-Type,X-Requested-With,Accept,Authorization');
  if(req.method === 'OPTIONS'){
      res.status(200).end();
  }else{
      next();
  }
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);






  // app.use((req, res, next)  => {
  //   const error = new Error(' Not found ');
  //   error.status = 404;
  //   next(error);

  // })



module.exports = app; 