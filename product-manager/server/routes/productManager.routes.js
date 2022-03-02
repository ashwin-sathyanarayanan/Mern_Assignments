const productManagerCtrl = require('../controllers/ProductManager.controller')


module.exports = (app) => {
    app.get('/api/healthcheck', productManagerCtrl.healthcheck);
    app.get('/', productManagerCtrl.getAllProducts);
    app.get('/:_id', productManagerCtrl.getProductById);
    app.post('/', productManagerCtrl.addNewProduct);
    app.delete('/:_id', productManagerCtrl.deleteProduct);
    app.put('/:_id/edit', productManagerCtrl.updateProduct);
};

