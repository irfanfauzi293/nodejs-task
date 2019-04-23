const response = require('../response/response');
const customerDao = require('../dao/customer-dao');
const joi = require('../joi-validation/customer-validation');

class CustomerController {

   constructor() { }

   static async getCustomers(req,res) {
     try {
         let customers = await customerDao.selectAll();
         res.status(200).send(customers);
     } catch(error) {
         res.status(500)
         res.send(error);
     }
   }

   static async getCustomerById(req,res) {
       try {
           let customer = await customerDao.selectId(req.params['id']);
           if(!customer) {
               response.noData(null,res);
               return;
           }
           response.success(customer,res);
       } catch(error) {
           response.err(error,res);
       }
   }

   static async createCustomer(req,res) {
        try {
            let newCustomer = await customerDao.insert(req.body);
            response.success(newCustomer,res);
        } catch(error) {
            res.status(401);
            res.json(error);
        }
   }

   static async updateCustomer(req,res) {
       try {
           let customer = await customerDao.selectId(req.params['id']);
           if(!customer) {
               response.noData(null,res)
               return;
           }
           let updatedCustomer = await customerDao.update(customer.idCustomer,req.body);
           response.success(updatedCustomer,res);
       } catch(error) {
           response.err(error,res);
       }
   }


}

module.exports = CustomerController;