module.exports = (Sequelize, DataTypes) => {
    const alias = "Producto";
    const column = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          id_marca: {
            type: DataTypes.INTEGER,
          },
          nombre: {
            type: DataTypes.STRING,
          },
          precio: {
            type: DataTypes.FLOAT,
          },
          descuento:{
            type: DataTypes.BOOLEAN,
          },
          cantidad_descuento: {
            type: DataTypes.FLOAT,
          },
          img: {
            type: DataTypes.STRING,
          },
          descripcion: {
            type: DataTypes.TEXT,
          },
          id_categoria: {
            type: DataTypes.INTEGER
          }
    };

    const config = {
        tableName: 'producto',
        timestamps: false
    };
    
    const Producto = Sequelize.define(alias, column, config);

    // hacer relaciones aca //

    Producto.associate = (models) =>{
      //relacion de mucho a mucho
      Producto.belongsToMany(models.Factura, {
          //nombre de la relacion
          as: "facturas",
          //nombre de la tabla pibot
          through: "Producto_factura",
          //nombre de la columna que hace referencia a la tabla actual
          foreignKey: "id_product",
          //nombre de la columna que hace referencia a la tabla 
          otherKey: "id_factura",
          timestamps: false
      });
      
      //relacion de producto y marca
      Producto.belongsTo(models.Marca, {
        as: "Marcas",
        foreignKey: "id_marca"
      });

      //categorias
      Producto.belongsTo(models.Categoria, {
        as: "Categorias",
        foreignKey: "id_categoria"
      });

      //tipo_mascota
      Producto.belongsTo(models.Tipo_mascota, {
        as: "Tipo_mascotas",
        foreignKey: "id_tipo_mascota"
      });
  }
    return Producto

}

