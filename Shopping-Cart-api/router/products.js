const express = require('express');
const routes = express.Router();
const checkAuth = require('../middleware/check-auth')
const ProductController = require('../controllers/products')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



routes.get ('/', checkAuth, ProductController.products_get_all);


routes.post ('/', upload.single('productImage'), ProductController.products_new);

routes.post('/:productID', checkAuth, ProductController.product_get_by_id);


routes.patch('/:productID', checkAuth, ProductController.products_update_one);

routes.delete('/:productID', checkAuth, ProductController.products_delete);

module.exports = routes;