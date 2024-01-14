const bd = require("../database/models")
const { Op } = require('sequelize')
module.exports = {
    offerProduct: async(req, res)=>{
        let product = await bd.Producto.findAll({
            where:{descuento: true},
            include:{association: "Categorias"},
        });
        console.log(product);
        let data = product.map(prod =>{
            return(
                {
                    id: prod.id,
                    nombre: prod.nombre,
                    precio: prod.precio,
                    descuento: prod.cantidad_descuento,
                    img: prod.img,
                    categoria: prod.Categorias.categoria,
                    descripcion: prod.descripcion

                }
            )
        })
        
        res.json(data);
    },
    listProducts: async(req,res)=>{
        const products = await bd.Producto.findAll(
            {
                include:[
                    {association: "Categorias"}, 
                    {association: "Marcas"}
                ]
            });
            const data = products.map((dat)=>{
                return(
                    {
                        id: dat.id,
                        nombre: dat.nombre,
                        img: dat.img,
                        precio: dat.precio,
                        descuento: dat.cantidad_descuento,
                        categoria: dat.Categorias.categoria,
                        marca: dat.marcas.nombre,
                        descripcion: dat.descripcion
                    }
                )
            });
            res.json(data);

    },
    filterProducts: async(req, res)=>{
        const param = req.query;

        if(param.tipo_mascota){
            const mascota = param.tipo_mascota[0].toUpperCase() + param.tipo_mascota.substring(1);

            let products = await bd.Producto.findAll({
                include: [
                    {
                        model: bd.Tipo_mascota,
                        as:'Tipo_mascotas',
                        where: {tipo_mascota: mascota},
                        attributes: ['tipo_mascota']
                    },
                    {
                        model: bd.Marca,
                        as:'Marcas',
                        attributes: ['nombre']
                    },
                    {
                        model: bd.Categoria,
                        as:'Categorias',
                        attributes: ['categoria']
                    }
                ]
            });
            if (products.length > 0) {
                console.log(products);
                products = products.map(product =>{
                    return({
                        id: product.id,
                        nombre: product.nombre,
                        precio: product.precio,
                        descuento: product.cantidad_descuento,
                        img: product.img,
                        descripcion: product.descripcion,
                        marca: product.Marcas.nombre,
                        categoria: product.Categorias.categoria,
                        tipo_mascota: product.Tipo_mascotas.tipo_mascota
                    })
                })
                res.json(products);
            }
            res.status(404).json("not found")
        }
        console.log(param);
        res.json("entro")
    },
    detailProduct: async(req, res)=>{
        const id = req.query.id;
        console.log(id);
        const product = await bd.Producto.findByPk(id, {
            include: [
                    {
                        model: bd.Tipo_mascota,
                        as:'Tipo_mascotas',
                        attributes: ['tipo_mascota']
                    },
                    {
                        model: bd.Marca,
                        as:'Marcas',
                        attributes: ['nombre']
                    },
                    {
                        model: bd.Categoria,
                        as:'Categorias',
                        attributes: ['categoria']
                    }
                    
            ]
        });
        res.json({
            id: id,
            nombre: product.nombre,
            precio:product.precio,
            descuento: product.cantidad_descuento,
            img: product.img,
            descripcion: product.descripcion,
            tipo_mascota: product.Tipo_mascotas.tipo_mascota,
            marca: product.Marcas.nombre,
            categorias: product.Categorias.categoria
        })
    },
    searchProduct: async(req,res)=>{
        const search = req.query.search;
        const searchBD = await bd.Producto.findAll({
            where: {
                nombre: {
                [Op.like]: `%${search}%`
            }}
        });
        if (searchBD) {
            res.json(searchBD)
        }else{
            res.json({
                error: "no found"
            })
        }

    },
    createProduct: async(req, res)=>{
        const brand = await bd.Marca.findAll();
        const petType = await bd.Tipo_mascota.findAll();
        const category = await bd.Categoria.findAll();
        res.json({
            marcas: brand,
            tipoMascotas: petType,
            categorias: category
        })
    },

}