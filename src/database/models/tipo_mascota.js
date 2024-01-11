module.exports = (Sequelize, DataTypes) =>{
    const alias = "Tipo_mascota";

    const column = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_mascota: {
            type: DataTypes.STRING
        }
    }

    const config = {
        tableName: 'tipo_mascota',
        timestamps: false
    }
    const Tipo_mascota = Sequelize.define(alias, column, config);

    //relaciones 
    Tipo_mascota.associate = (models)=>{
        Tipo_mascota.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_tipo_mascota"
        })
    }


    return Tipo_mascota;
}