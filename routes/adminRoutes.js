const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

//home page
router.get("/");
//products page - add product
router.get("/products" , productController.getAllProducts)
.post("/products" , productController.addProduct);
//get delete update
router.get("/products/:_id" , productController.getProductById)
.put("/products/:_id" , productController.updateProductById)
.delete("/products/:_id" , productController.deleteProductById);


module.exports = router ;