const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

//home page
router.get("/");
//products page 
router.get("/products" , productController.getAllProducts);
//about us page
router.get("/aboutUs");
//admin signin page 
router.get("/adminSignin");

module.exports = router ;