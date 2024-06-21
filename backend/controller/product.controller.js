import Product from "../model/product.model.js";

export default getProduct=async (req, res)=>{
    try{
        const product = await Product.find();
        res.status(200).json(product)
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json( error)
    }
}