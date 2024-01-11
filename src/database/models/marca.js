module.exports = (Sequelize, DataTypes) =>{
    const alias = "Marca";

    const column = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        }
    }

    const config = {
        tableName: 'marca',
        timestamps: false
    }
    const Marca = Sequelize.define(alias, column, config);

    //relaciones 
    Marca.associate = (models)=>{
        Marca.hasMany(models.Producto, {
            as: "productosMarca",
            foreignKey: "id_marca"
        })
    }


    return Marca;
}