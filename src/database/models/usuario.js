module.exports = (Sequelize, DataTypes) =>{
    const alias = "Usuario";

    const column = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_y_apellido: {
            type: DataTypes.STRING
        },
        user: {
            type:DataTypes.STRING
        }, 
        email: {
            type: DataTypes.STRING
        },
        
        direccion:{
            type: DataTypes.STRING
        }, 
        password:{
            type: DataTypes.STRING
        },
        img:{
            type: DataTypes.STRING
        },
        id_rol: {
            type: DataTypes.INTEGER
        },
       
    }

    const config = {
        tableName: 'usuario',
        timestamps: false
    }
    const Usuario = Sequelize.define(alias, column, config);

    //relaciones 
    Usuario.associate = (models)=>{
        Usuario.belongsTo(models.Rol, {
            as: "roles",
            foreignKey: "id_rol"
        })
    }


    return Usuario;
}