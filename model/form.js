module.exports = (sequelize,type) =>{
    return sequelize.define('form',{
        formId: {
            field:'form_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        formName:{type:type.STRING,field:'form_name'},
        type: type.STRING,
        columns: type.INTEGER,
        isActive: {type:type.INTEGER,field:'is_active'}
    },{
        tableName : 'form',
        timestamps: false
    })
}