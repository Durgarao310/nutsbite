const express = require("express");
const router = express.Router();
const { upload, resize } = require("../middlewares/upload");
const productController = require("../controllers/controller.product");
const verifyToken = require('../middlewares/verifytoken');
const userJWT = require('../middlewares/userJWT');

// get all products
router.get("/", (userJWT || verifyToken ),productController.product_get);

//get single product 
router.get("/:id", (userJWT || verifyToken ), productController.single_product);

//add a product
router.post(
  "/post",
  upload.single("imageUrl"),
  resize,
  (userJWT || verifyToken ),
  productController.product_post
);

//update
router.patch(
  "/:id",
  upload.single("imageUrl"),
  resize,
  (userJWT || verifyToken ),
  productController.product_update
);

//delete
router.delete("/:id", (userJWT || verifyToken ), productController.product_delete);

module.exports = router;