// dotenv config 
require("dotenv").config();
//express dependancies 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT ;
const uri = process.env.URI ;

//parsing middlewares
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//set view engine 
app.set("view engine" , "ejs");

//mongoose deprecation warning
mongoose.set('strictQuery' , false);
//database connection 
mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected to database ..");
})
.catch((err)=>{
    console.log("Failed to connect to database ..");
    for(let e in err.errors){
        console.log(err.errors[e].message);
    }
});

//Run the server
app.listen(port , (err)=>{
    if(!err){
        console.log(`server is running on port:${port}`);
    }
    else{
        console.log("Failed to Run server ..");
        for(let e in err.errors){
            console.log(err.errors[e].message);
        }
    }
});