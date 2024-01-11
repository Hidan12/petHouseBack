module.exports = (Sequelize, DataTypes) =>{
    const alias = "Factura";

    const column = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        id_usuario:{
            type: DataTypes.INTEGER
        },
        fecha:{
            type: DataTypes.DATE
        },
        valor: {
            type: DataTypes.FLOAT
        },

    }

    const config = {
        tableName: 'factura',
        timestamps: false
    }
    const Factura = Sequelize.define(alias, column, config);

    //relaciones 
    Factura.associate = (models)=>{
        Factura.belongsTo(models.Usuario, {
            as: "facturacion",
            foreignKey: "id_usuario"
        })
    }


    return Factura;
}