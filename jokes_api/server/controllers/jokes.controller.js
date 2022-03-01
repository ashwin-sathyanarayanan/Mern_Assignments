const Joke = require("../models/jokes.model")
const { json } = require("express");

const healthcheck = (req, res) => {
    res.json({ meg: "everything is set up" })
};

const addNewJoke = (req, res) => {
    const { body } = req;
    console.log(req.body)
    // res.json({ msg: "gets to add joke" })
    Joke.create(body)
        .then((newlyCreatedJoke) => {
            res.json({ newlyCreatedJoke })
        })
        .catch((err) => {res.status(400).json({ err })});
};

const findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err) => {res.status(400).json({ err })});
}

const findOneJokeById = (req, res) => {
    Joke.findOne({_id: req.params._id})
        .then((oneSingleJoke => {
            res.json({joke: oneSingleJoke})
        }))
        .catch((err) => {res.status(400).json({ err })});
}

const updateJokeById = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedJoke) => {
            res.json({joke: updatedJoke})
        })
        .catch((err) => {res.status(400).json({ err })});
}

const deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {res.status(400).json({ err })});
    };

module.exports = {
    healthcheck,
    addNewJoke,
    findAllJokes,
    findOneJokeById,
    updateJokeById,
    deleteAnExistingJoke
};