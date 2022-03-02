const mongoose = require("mongoose");

const ProductManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, "pet name is required"],
        // minlength: [3, "pet name must be atleast 3 characters"]
    },
    price: {
        type: String,
        // required: [true, "pet type is required"],
        // minlength: [3, "pet type must be atleast 3 characters"]
    },
    description: {
        type: String,
        // required: [true, "pet description is required"],
        // minlength: [3, "pet description must be atleast 3 characters"]
    }
});

const ProductManager = mongoose.model("ProductManager", ProductManagerSchema);

module.exports = ProductManager;