module.exports = (sequelize,type) =>{
    return sequelize.define('field',{
        fieldId: {
            field:'field_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        keyfield: type.STRING,
        label: type.STRING,
        datatype: type.STRING,
        required: type.STRING,
        description: type.STRING,
        event : type.STRING,
        isActive: {type:type.INTEGER,field:'is_active'}
    },{
        tableName : 'field',
        timestamps: false
    })
}