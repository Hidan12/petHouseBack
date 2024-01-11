const bd = require("../database/models")
const bcrypt = require("bcryptjs");

module.exports = {
    searchUser: async (req, res)=>{
        
        let user = await bd.Usuario.findOne({
            where:{email: req.body.user}
        });
        
        if (user.dataValues != undefined) {
            
            const us = user.dataValues;
            
            const compare = await bcrypt.compare(req.body.password, us.password);
            console.log("resultado al comparar", compare);
            if(compare){
                res.json({
                    nombre: user.nombre_y_apellido,
                    user: user.user,
                    direccion: user.dereccion,
                    img: user.img
                })
            }
            res.json("error")
        }
        
        res.json("funciona");
        
    }
}