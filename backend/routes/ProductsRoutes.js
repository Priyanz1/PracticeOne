const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel');

router.post('/addProduct', async (req, res) => {
  try {
    const { name, price, description, image, category, stock ,isbest} = req.body;

    const product = await ProductModel.create({
      name,
      price,
      description,
      image,
      category,
      stock,
      isbest
    });

    res.status(201).json({
      message: "Product added successfully",
      product:product
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
});

router.get('/getAllProducts', async (req, res) => {
  try {
    const products = await ProductModel.find().lean();

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json({
      message: "Products fetched successfully",
      products:products
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
});

// router.get('/getProductById/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await ProductModel.findOne({_id:id}).lean();

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({
//       message: "Product fetched successfully",
//       product:product
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server error",
//       error: error.message
//     });
//   }
// });

module.exports = router;