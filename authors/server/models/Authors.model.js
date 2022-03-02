const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "pet name is required"],
        // minlength: [3, "pet name must be atleast 3 characters"]
    }
});

const Authors = mongoose.model("Authors", AuthorsSchema);

module.exports = Authors;