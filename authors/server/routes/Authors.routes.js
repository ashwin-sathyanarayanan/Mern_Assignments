const AuthorsCtrl = require('../controllers/Authors.controller')


module.exports = (app) => {
    app.get('/api/healthcheck', AuthorsCtrl.healthcheck);
    app.get('/', AuthorsCtrl.getAllAuthors);
    app.get('/:_id', AuthorsCtrl.getAuthorById);
    app.post('/new', AuthorsCtrl.addNewAuthor);
    app.delete('/:_id', AuthorsCtrl.deleteAuthor);
    app.put('/:_id/edit', AuthorsCtrl.updateAuthor);
};

