const jokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/healthcheck", jokesController.healthcheck);
    app.post("/api/jokes", jokesController.addNewJoke);
    app.get("/api/jokes", jokesController.findAllJokes);
    app.get("/api/jokes/:_id", jokesController.findOneJokeById);
    app.put("/api/jokes/:_id", jokesController.updateJokeById);
    app.delete("/api/jokes/:_id", jokesController.deleteAnExistingJoke)
};