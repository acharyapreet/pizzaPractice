const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : [true, "Product name is required"],
        minLength : [5,"Product name should be atleast 5 characters long"],
        trim : true
    },
    description : {
        type : String,
        minLength : [5,"description should be atleast 5 characters long"]
    },
    productImage : {
        type : String
    },
    price : {
        type : Number,
        required : [true, "Price is required"]
    },
    category : {
        type : String,
        enum : ["food","drinks"],
        default : "food"
    },
    inStock : {
        type : Boolean,
        default : true,
        required : [true, "in stock is required"]
    }
},{
    timestamps : true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;