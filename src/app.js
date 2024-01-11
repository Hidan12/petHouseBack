const express = require('express');
const path = require("path");
const methodOverride = require("method-override");

const routesProduc = require("./routes/routesProduct");
const routesUser = require("./routes/routesUser")

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static("public"));


app.use("/product", routesProduc);
app.use("/user", routesUser);
app.use((req, res, next) =>{
    res.status(404).json("error")
});

app.listen(3000, ()=>{
    console.log("servidor activo en el puerto 3000");
});
