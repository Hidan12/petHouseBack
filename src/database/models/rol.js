module.exports = (Sequelize, DataTypes) =>{
    const alias = "Rol";

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
        tableName: 'rol',
        timestamps: false
    }
    const Rol = Sequelize.define(alias, column, config);

    //relaciones 
    Rol.associate = (models)=>{
        Rol.hasMany(models.Usuario, {
            as: "usuarios",
            foreignKey: "id_rol"
        })
    }


    return Rol;
}