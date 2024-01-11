module.exports = (Sequelize, DataTypes) =>{
    const alias = "Categoria";

    const column = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.STRING
        }
    }

    const config = {
        tableName: 'categoria',
        timestamps: false
    }
    const Categoria = Sequelize.define(alias, column, config);

    //relaciones 
    Categoria.associate = (models)=>{
        Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_categoria"
        })
    }


    return Categoria;
}