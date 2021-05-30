const Coupon = require("../models/coupon");

// get all coupons 
const coupons_get = (req, res) => {
    Coupon.find()
    .then((data) => {
        return res.status(200).send({
          status: "OK",
          message: "Get Orders Successfully",
          content: data,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          status: "ERR_SERVER",
          message: err.message,
          content: null,
        });
      });
  };

  // add a coupon
const coupon_post = (req, res) => {
  if (!req.body) {
    return res.status(500).send({
      status: "ERR_REQUEST",
      message: "Please check your request!",
      content: null,
    });
  }
  const coupon = new Coupon({
    price: req.body.price,
    description: req.body.description,
    coupon: req.body.coupon,
    endDate: req.body.endDate,

  });
  return coupon
    .save()
    .then((data) => {
      return res.status(200).send({
        status: "OK",
        message: "Added Product Successfully",
        content: data,
      });
    })
    .catch((err) => {
      return res.status(400).send({
        status: "ERR_SERVER",
        message: err.message,
        content: null,
      });
    });
};

// eslint-disable-next-line consistent-return
const coupon_update = async (req, res) => {
  const id = req.params.id;
  if (!req.params.id || !req.body) {
    return res.status(200).send({
      status: "ERR_REQUEST",
      message: "Please check your ID request",
      content: null,
    });
  }

  const coupon = 
     {
        price: req.body.price,
        description: req.body.description,
        coupon: req.body.coupon,
        endDate: req.body.endDate
      }
  
  Coupon.findByIdAndUpdate(id, coupon)
    .then((data) => {
      return res.status(200).send({
        status: "OK",
        message: "Updated Product Successfully",
        content: data,
      });
    })
    .catch((err) => {
      return res.status(400).send({
        status: "ERR_SERVER",
        message: err.message,
        content: null,
      });
    });
};

const coupon_delete = (req, res) => {
  const id = req.params.id;
  Coupon.findByIdAndDelete(id)
    .then((data) => {
      return res.status(200).send({
        status: "OK",
        message: "Deleted Product Successfully",
        content: data,
      });
    })
    .catch((err) => {
      return res.status(400).send({
        status: "ERR_SERVER",
        message: err.message,
        content: null,
      });
    });
};

const single_coupon = (req, res) => {
  const id = req.params.id;
  Coupon.findById(id)
    .then((data) => {
      return res.status(200).send({
        status: "OK",
        message: "fetch Product Successfully",
        content: data,
      });
    })
    .catch((err) => {
      return res.status(400).send({
        status: "ERR_SERVER",
        message: err.message,
        content: null,
      });
    });
};

module.exports = {
  coupons_get,
  coupon_post,
  coupon_update,
  coupon_delete,
  single_coupon
};