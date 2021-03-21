const express = require('express')

const router = express.Router();

const {createCategory} = require("../controller/category");
const {getAllCategory} = require("../controller/category");
const {getCategoryById} = require("../controller/category");
const {removeCategory} = require("../controller/category");

router.param("categoryId", getCategoryById); //param=parameter;

router.post("/category/create/", createCategory);
router.get("/category/getallcategories/", getAllCategory);
router.post("/removeCategory", getAllCategory);
router.delete("/category/:categoryId",removeCategory);




module.exports = router;