module.exports = (sequelize,type) =>{
    return sequelize.define('mapping',{
        mappingId : {
            type: type.INTEGER,
            field: 'mapping_id',
            primaryKey:true,
            autoIncrement: true
        },
        field_id : {
            type:type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model:'field',
                key: 'field_id'
            }
        },
        form_id : {
            type:type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'form',
                key: 'form_id'
            }
        },
        isActive : {
            type:type.INTEGER,
            field: 'is_active'
        },
        orderNo : {
            type:type.INTEGER,
            field: 'order_no'
        }
    },{
        tableName : 'mapping',
        timestamps: false
    })
}