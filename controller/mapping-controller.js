const response = require('../response/response');
const mappingDao = require('../dao/mapping-dao');
const customerDao = require('../dao/customer-dao');

class MappingDao {
    constructor() { }

    static async getForm(req, res) {
        try {
            let form = await mappingDao.getForm(req.params['formName'], req.params['formType']);
            response.success(form, res);
            console.log(res);
        } catch (error) {
            response.err(error);
        }
    }
}

module.exports = MappingDao;