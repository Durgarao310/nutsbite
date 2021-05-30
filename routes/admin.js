const express = require("express");
const router = express.Router();
const orders = require("../controllers/controller.admin.dashboard")
const users = require("../controllers/controller.admin.dashboard")
const { upload, resize } = require("../middlewares/upload");
const productController = require("../controllers/controller.product");
const validateJWT = require('../middlewares/validateJWT');

const {
  admin_login,
} = require("../controllers/controller.admin.auth");

router.post("/login", admin_login);

router.get('/orders', validateJWT, orders.orders_get)
router.get('/users', validateJWT, users.users_get)
router.patch('/orders/:id', validateJWT, orders.single_order_update)

// get all products
router.get("/products", validateJWT,productController.product_get);

//get single product 
router.get("/products/:id", validateJWT, productController.single_product);

//add a product
router.post(
  "/products/post",
  upload.single("imageUrl"),
  resize,
  validateJWT,
  productController.product_post
);

//update
router.patch(
  "/products/:id",
  upload.single("imageUrl"),
  resize,
  validateJWT,
  productController.product_update
);

//delete
router.delete("/products/:id", validateJWT, productController.product_delete);


module.exports = router;
