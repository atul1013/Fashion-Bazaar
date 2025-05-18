const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Classic White T-Shirt",
      price: 499,
      imageUrl: "https://via.placeholder.com/300x400?text=White+T-Shirt",
    },
    {
      name: "Blue Denim Jeans",
      price: 1199,
      imageUrl: "https://via.placeholder.com/300x400?text=Blue+Jeans",
    },
    {
      name: "Leather Jacket",
      price: 3999,
      imageUrl: "https://via.placeholder.com/300x400?text=Leather+Jacket",
    },
  ]);

  console.log("Sample data inserted.");
  process.exit();
});
