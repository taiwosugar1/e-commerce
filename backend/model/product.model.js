import mongoose from " mongoose";

const productSchema=mongoose.Schema({
    name:String,
    price: Number,
    category:String,
    image:String,
    description:String,
    title:String,
});
const Product = mongooswe.model(Product, productSchema);

export default Product