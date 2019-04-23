const Sequelize = require('sequelize');
const CustomerModel = require('../model/customer');
const FieldModel = require('../model/field');
const FormModel = require('../model/form');
const MappingModel = require('../model/mapping');

const dbconfig = new Sequelize('lending','root','',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        max: 10,
        min: 0,
        acquire : 300,
        idle: 100
    }
})

const Customer = CustomerModel(dbconfig,Sequelize);
const Field = FieldModel(dbconfig,Sequelize);
const Form = FormModel(dbconfig,Sequelize);
const Mapping = MappingModel(dbconfig,Sequelize);
Field.hasMany(Mapping,{foreignKey:'field_id',sourceKey:'fieldId'});
Mapping.belongsTo(Field,{foreignKey: 'field_id',targetKey:'fieldId'});
Mapping.belongsTo(Form,{foreignKey: 'form_id',targetKey:'formId'});

module.exports = {
    Customer,
    Field,
    Form,
    Mapping
}
