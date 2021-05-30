const express = require("express");
const router = express.Router();
const couponController = require("../controllers/controller.coupons");
const validateJWT = require('../middlewares/validateJWT');
const userJWT = require('../middlewares/userJWT');
// get all coupons
router.get("/",(userJWT || validateJWT ) ,couponController.coupons_get);

//get single coupon 
router.get("/:id", validateJWT, couponController.single_coupon);

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