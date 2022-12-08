const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName :{
        type : String,
        required : true ,
        trim : true
    },
    productDetails :{
        type : String ,
        required : true ,
    },
    productCategory :{
        type : String ,
        required : true ,
        enum : ["educational" , "tools" , "technology"]
    },
    productImg :{
        type : String,
        required :true
    }
});

const Product = mongoose.model("Product" , productSchema);

module.exports = Product ;
