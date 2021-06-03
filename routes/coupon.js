const express = require("express");
const router = express.Router();
const couponController = require("../controllers/controller.coupons");
const validateJWT = require('../middlewares/validateJWT');
const userJWT = require('../middlewares/userJWT');
const verifyToken = require('../middlewares/verifytoken');

// get all coupons
router.get("/user", userJWT,couponController.coupons_get);
router.get("/admin", validateJWT,couponController.coupons_get);
router.get("/", verifyToken,couponController.coupons_get);


//get single coupon 
router.get("/user/:id", userJWT , couponController.single_coupon);
router.get("/admin/:id",validateJWT , couponController.single_coupon);
router.get("/:id",verifyToken , couponController.single_coupon);


//add coupon
router.post(
  "/post",
  validateJWT,
  couponController.coupon_post
);

//update coupon
router.patch(
  "/:id",
  validateJWT,
  couponController.coupon_update
);

//delete coupon
router.delete("/:id", validateJWT, couponController.coupon_delete);

module.exports = router;