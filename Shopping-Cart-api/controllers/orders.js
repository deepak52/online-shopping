const Order = require("../models/orders");
const Product = require("../models/products");
const User = require("../models/user")
const mongoose = require('mongoose');
exports.orders_get_all = (req, res, next) => {
    Order
    .find()
    .select('quantity product _id')
    .populate('product', 'title price description productImage')
    .exec()
    .then( doc => {
        res.status(200).json(doc)
    })
    .catch( err => {
       res.status(200).json({
           message: err,
       })
    });
}

exports.orders_create_new = (req, res, next) => {
// Product.findById(req.body.productId)
//     .then(product => {
//         if (!product) {
//             return res.status(404).json({
//                 message: "Product not found"
//         });
//     }
//     const order = new Order({
//         _id: mongoose.Types.ObjectId(),
//         quantity: req.body.quantity,
//         product: req.body.productId
//     });
//     return order.save();
//     })
    // const order = new Order({
    //     _id: mongoose.Types.ObjectId(),
    //     quantity: req.body.quantity,
    //     product: req.body.productId
    // });
    console.log(req.body);
    Order.insertMany(req.body)
    .then(result => {
        res.status(201).json({
            message: "Order stored",
            createdOrder: result,
            request: {
                type: "GET"
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            message: err
        });
    });
}

exports.orders_find_order_by_id = (req, res, next) => {
Order.findById(req.params.orderId)
.exec()
.then(order => {
    if (!order) {
    return res.status(404).json({
        message: "Order not found"
    });
    }
    res.status(200).json({
    order: order,
    request: {
        type: "GET",
        url: "http://localhost:8001/orders"
    }
    });
})
.catch(err => {
    res.status(500).json({
    error: err
    });
});
}

exports.orders_delete = (req, res, next) => {
    Order.remove({ _id: req.params.orderId })
    .exec()
    .then( order => {
        res.status(200).json({
            message : "Order Deleted",
            request: {
                type: "DELETE",
                url: "http://localhost:8001/orders",
                body: { quantity: order.quantity, product: order.product},
            }
        })
    })
    .catch( err => {
        req.status(500).json({
            err
        })
    })

}