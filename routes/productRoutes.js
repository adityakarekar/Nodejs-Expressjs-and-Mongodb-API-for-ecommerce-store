const express = require('express');
const router = express.Router();

const {
  //getProductById,
  createProduct,
 // getAllproduct,
  //getProduct,
} = require("../controller/productController");


//all of params

//router.param("productId", getProductById);

//all of actual routes
//create route
router.post("/product/create",createProduct);

{/*router.get("/product",getAllproduct);

// // read routes
router.get("/product/:productId", getProduct);


// //delete route
router.delete("/product/:productId",deleteProduct);*/}

module.exports = router;
