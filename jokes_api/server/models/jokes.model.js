const mongoose = require("mongoose");

const jokesSchema = new mongoose.Schema({
    setup: {
        type: String,
    },
    punchline: {
        type: String,
    }
})

const Joke = mongoose.model('Joke', jokesSchema);

module.exports = Joke;