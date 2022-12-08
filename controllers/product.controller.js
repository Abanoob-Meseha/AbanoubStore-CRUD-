const Product  = require("../models/productModel");


// create new product
const addProduct = (req , res )=>{
    const newProduct = new Product({
        productName : req.body.productName,
        productDetails : req.body.productDetails,
        productCategory : req.body.productCategory,
        productImg : req.body.productImg
    })
    newProduct.save().then(()=>{
        console.log("new product Added ..");
        res.status(200).send("new product Added ..");
        console.table(newProduct);
    }).catch((err)=>{
        console.log("problem Adding the product !!");
        res.status(404).send("problem Adding the product !!")
        for(let e in err.errors){
            console.log(err.errors[e].message);
        }
    });
}

//read all products 
const getAllProducts = async (req ,res )=>{
    try {
        let products = await Product.find() ;
        console.table(products);
        res.status(200).send(products);
    } catch (err) {
        for(let e in err.errors){
            console.log(err.errors[e].message);
        }
        res.status(404).send("couldn't gat all products")
    }
    
}

//read product by id 
const getProductById = async (req ,res )=>{
    try {
        let product = await Product.findById({_id : req.params._id}) ;
        if(!product){
            console.log("coudn't find product with this id !!")
            res.status(200).send("coudn't find product with this id !!");
        }
        else{
            console.table(product);
            res.status(200).send(product);
        }
    } catch (err) {
        for(let e in err.errors){
            console.log(err.errors[e].message);
        }
        res.status(404).send("problem getting the product !!")
    }
    
}

// update product by id 
const updateProductById = async (req ,res ) =>{
    try {
        let updatedProduct = await Product.findOneAndUpdate({_id : req.params._id } , {
            productName : req.body.productName,
            productDetails : req.body.productDetails,
            productCategory : req.body.productCategory,
            productImg : req.body.productImg
        })
        console.log(updatedProduct);
        res.status(200).send(updatedProduct);

    } catch (err) {
        for(let e in err.errors){
            console.log(err.errors[e].message);
        }
        res.status(404).send("problem updating the product !!")
    }
}

//delete product by id
const deleteProductById = (req ,res ) =>{
    Product.findOneAndDelete({_id : req.params._id })
    .then(()=>{
        console.log("product deleted successfully ..");
        res.status(200).send("product deleted successfully ..");
    })
    .catch((err)=>{
        console.log("problem deleting the product !!");
        res.status(404).send("problem deleting the product !!")
        for(let e in err.errors){
            console.log(err.errors[e].message);
        }
    });
}

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}