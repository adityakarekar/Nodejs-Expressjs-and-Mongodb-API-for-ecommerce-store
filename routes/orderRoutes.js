const express = require("express");
const router = express.Router();



const {
 // getOrderById,
  createOrder,
  //getAllOrders,
 //getOrderStatus,
  //updateStatus
} = require("../controller/orderController");

//params


//Actual routes
//create
router.post(
  "/order/create",

  createOrder
);


module.exports = router;
