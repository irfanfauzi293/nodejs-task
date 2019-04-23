const { Customer } = require('../db-config/config');
const SMEFieldId = ['name', 'dob', 'nik', 'npwp'];
const MURFieldId = ['name', 'pob', 'dob', 'nik', 'npwp'];
const CommercialFieldId = ['name', 'pob', 'dob', 'nik', 'mmn', 'npwp'];


class CustomerDao {

    constructor() { }

    static async selectAll() {
        try {
            let allData = await Customer.findAll();
            return allData;
        }
        catch (error) {
            return error;
        }
    }

    static async selectId(id) {
        try {
            let data = await Customer.findByPk(id);
            return data;
        }
        catch (error) {
            return error;
        }
    }

    static async insert(data) {
        try {
            let newData = await Customer.create(data);
            return newData;
        } catch (error) {
            return error;
        }
    }

    static async update(id, data) {
        try {
            let updatedData = await Customer.update(data, {
                where: { idCustomer: id },
                returning: true,
                plain: true
            })
            return updatedData;
        } catch (error) {
            return error;
        }
    }

}

module.exports = CustomerDao