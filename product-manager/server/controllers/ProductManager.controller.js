const ProductManager = require("../models/productManager.model");

const healthcheck = (req,res) => {
    res.json({msg: "ALL GOOD"});
};

const getAllProducts = (req,res) => {
    ProductManager.find()
        .then((allProducts) =>{
            console.log(allProducts)
            res.json({allProducts});
        })
        .catch((err) => {res.status(400).json({ err })});
}

const addNewProduct = (req,res) => {
    console.log('gets here');
    const {body} = req;
    ProductManager.create(body)
        .then((newProduct) => {
            res.json({newProduct});
        })
        .catch((err) => {res.status(400).json({ err })});
}

const getProductById = (req, res) => {
    // console.log('gets to product by id');
    ProductManager.findOne({_id: req.params._id})
        .then((queriedProduct) => res.json({ queriedProduct}))
        .catch((err) => {res.status(400).json({ err })});
}

const deleteProduct = (req,res) => {
    console.log('gets to delete product');
    ProductManager.deleteOne({ _id: req.params._id})
    .then((response) => res.json({response}))
    .catch((err) => {res.status(400).json({ err })});
}

const updateProduct = (req,res) => {
    ProductManager.findOneAndUpdate({_id: req.params._id}, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProduct) => res.json({updatedProduct}))
        .catch((err) => {res.status(400).json({ err })});
}

module.exports = {
    healthcheck,
    addNewProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct
}