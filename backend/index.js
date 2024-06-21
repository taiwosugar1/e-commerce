
const  express = require ("express");
const app = express();
require ('dotenv').config()
const port = priocess.env.PORT ||5000;
console.log


import productRoute from "./route/product.route.js"






//connect to mongoDB


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user-1:sugar2000@ecommerce-gomycode.eo83f7f.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-gomycode";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



//defining routes
app.get('/', (req, res) => {
  res.send('Hello developers 2025!')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})