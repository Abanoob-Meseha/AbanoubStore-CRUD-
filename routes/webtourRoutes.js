const express = require("express");
const router = express.Router();

//home page
router.get("/");
//products page 
router.get("/products");
//about us page
router.get("/aboutUs");
//admin signin page 
router.get("/adminSignin");

module.exports = router ;