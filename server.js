const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModel")

app.use(express.json);

// routes
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog My Name is Ajith");
});

app.post("/product", async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
});

mongoose
  .connect(
    `mongodb+srv://ajithvc45:Ajithvc45@crudapi.cs01ajz.mongodb.net/Node-API?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
