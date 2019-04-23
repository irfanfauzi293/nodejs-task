const Joi = require('../joi-validation/customer-validation');

module.exports = function(app) {
    const todolist = require('../controller/customer-controller');

    app.route('/customer').get(todolist.getCustomers);
    app.route('/customer/:id').get(todolist.getCustomerById);
    app.route('/customer').post(Joi,todolist.createCustomer);
    app.route('/updateCustomer/:id').put(todolist.updateCustomer);
}