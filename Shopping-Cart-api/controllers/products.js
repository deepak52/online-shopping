const Product = require('../models/products');
const mongoose = require('mongoose');
exports.products_get_all = (req, res, next) => {
   Product.find()
    .select('title price _id productImage description image')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map( doc => {
          return {
            title: doc.title,
            price: doc.price,
            id: doc._id,
            product:doc._id,
            description: doc.description,
            image: doc.productImage,
            request: {
              type: 'GET',
              url: 'http://localhost/products/' + doc._id
            }
          }
        })
      }
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}

exports.products_new = (req, res, next) => {
  console.log(req.file.path)
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        title : req.body.title,
        description: req.body.description,
        price : req.body.price,
        productImage : req.file.path,
    });
    product.save().then( result => {
        json(result)
    })
    .catch( error => console.log(error));
    res.status(200).json({
        message: "Handling POST requests to /products",
        createdProduct: product,
    })
}

exports.products_update_one = (req, res, next) => {

    const id = req.params.productID;
    const updateOps = {}
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    Product
    .updateMany({_id: id}, {$set: updateOps})
    .exec()
    .then( result => {
        res.status(200).json({
            result
        })
    })
    .catch( error => {
        res.status(500).json(error)
    })
} 

exports.products_delete = (req, res, next) => {
    const id = req.params.productID;
    Product
    .remove({_id: id})
    .exec()
    .then( result => {
        res.status(200).json({
            message: "Deleted products",
            product: result,
        })
    })
    .catch( error => {
        res.status(500).json({
            message: error,
        })
    })
   
}

exports.product_get_by_id = (req, res, next) => {
    const id = req.params.productID;
    Product.findById(id)
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
    
}