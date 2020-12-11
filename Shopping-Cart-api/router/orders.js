const express = require('express');
const routes = express.Router();
const OrderController = require('../controllers/orders');
const checkAuth =  require('../middleware/check-auth');

routes.get ('/', checkAuth, OrderController.orders_get_all);

routes.post("/", OrderController.orders_create_new);

routes.get("/:orderId", OrderController.orders_find_order_by_id);

routes.delete("/:orderId", OrderController.orders_delete);

module.exports = routes;