module.exports = (Sequelize, DataTypes) =>{
    const alias = "Producto_factura";

    const column = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_factura: {
            type: DataTypes.INTEGER
        },
        id_producto: {
            type: DataTypes.INTEGER
        },
        precio: {
            type: DataTypes.FLOAT
        },
        cantidad: {
            type: DataTypes.INTEGER
        },
    }

    const config = {
        tableName: 'producto_factura',
        timestamps: false
    }
    const Producto_factura = Sequelize.define(alias, column, config);



    return Producto_factura;
}