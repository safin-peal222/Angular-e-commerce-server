const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 5000;
app.use(cors());

const userHandler =require('./routehandler/userHandler');
const productHandler = require('./routehandler/productHandler')
const url = process.env.URL;
const uri = url;
mongoose.connect(uri).then(()=>console.log("connection successfull")).catch(err=>console.log(err));

// const { MongoClient, ServerApiVersion } = require('mongodb');
// 
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use("/user",userHandler);
app.use("/admin",productHandler);



  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })