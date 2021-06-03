const express = require("express");
const router = express.Router();
const { upload, resize } = require("../middlewares/upload");
const productController = require("../controllers/controller.product");
const verifyToken = require('../middlewares/verifytoken');
const userJWT = require('../middlewares/userJWT');

// get all products
router.get("/", verifyToken ,productController.product_get);
router.get("/user/",productController.product_get);


//get single product 
router.get("/:id",  verifyToken, productController.single_product);
router.get("/user/:id", productController.single_product);


//add a product
// router.post(
//   "/post",
//   upload.single("imageUrl"),
//   resize,
//  verifyToken ,
//   productController.product_post
// );

//update
// router.patch(
//   "/:id",
//   upload.single("imageUrl"),
//   resize,
//  verifyToken ,
//   productController.product_update
// );

//delete
// router.delete("/:id", verifyToken , productController.product_delete);

module.exports = router;