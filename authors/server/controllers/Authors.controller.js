const Authors = require("../models/Authors.model");

const healthcheck = (req,res) => {
    res.json({msg: "ALL GOOD"});
};

const getAllAuthors = (req,res) => {
    Authors.find()
        .then((allAuthors) =>{
            console.log(allAuthors)
            res.json({allAuthors});
        })
        .catch((err) => {res.status(400).json({ err })});
}

const addNewAuthor = (req,res) => {
    console.log('gets here');
    const {body} = req;
    Authors.create(body)
        .then((newAuthor) => {
            res.json({newAuthor});
        })
        .catch((err) => {res.status(400).json({ err })});
}

const getAuthorById = (req, res) => {
    // console.log('gets to product by id');
    Authors.findOne({_id: req.params._id})
        .then((queriedAuthor) => res.json({ queriedAuthor}))
        .catch((err) => {res.status(400).json({ err })});
}

const deleteAuthor = (req,res) => {
    console.log('gets to delete product');
    Authors.deleteOne({ _id: req.params._id})
    .then((response) => res.json({response}))
    .catch((err) => {res.status(400).json({ err })});
}

const updateAuthor = (req,res) => {
    Authors.findOneAndUpdate({_id: req.params._id}, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedAuthor) => res.json({updatedAuthor}))
        .catch((err) => {res.status(400).json({ err })});
}

module.exports = {
    healthcheck,
    addNewAuthor,
    getAllAuthors,
    getAuthorById,
    deleteAuthor,
    updateAuthor
}