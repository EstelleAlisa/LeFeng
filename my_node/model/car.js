
var mongoose=require('mongoose')
var Schema = mongoose.Schema;

var Cart= new Schema({

    pic    : String,
    product_name:String,
    product_count:Number,
    product_type:String,
    flag:Number,
    brandName:String,
    price:Number,
    date      : { type: Date, default: Date.now }

});
var CartModel = mongoose.model('cart', Cart);
module.exports = CartModel;