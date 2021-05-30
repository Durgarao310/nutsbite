const Order = require("../models/order");
const User = require("../models/user");


// get all users 
const users_get = (req, res) => {
  User.find()
  .then((data) => {
      return res.status(200).send({
        status: "OK",
        message: "Get Orders Successfully",
        content: data
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


// get all orders 
const orders_get = (req, res) => {
  Order.find()
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

// update the order status
const single_order_update = async (req, res) => {
  const { id } = req.params;
  const updateStatus = req.body.status;
  if (!req.params.id) {
    return res.status(200).send({
      status: "ERR_REQUEST",
      message: "Please check your ID request",
      content: null,
    });
  }

  try {
    const resOrder = await Order.findByIdAndUpdate(id, {
      status: updateStatus,
    });
    const data = await Order.findById(id)
    return res.status(200).send({
      status: "OK",
      message: "Updated Order Successfully",
      content: data,
    });
  } catch (err) {
    return res.status(400).send({
      status: "ERR_SERVER",
      message: err.message,
      content: null,
    });
  }
};


module.exports = {
  orders_get,
  users_get,
  single_order_update
};
