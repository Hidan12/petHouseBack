const express = require("express");
const router = express.Router();

const controllerProduct = require("../controllers/controllerProduct");


router.get("/offerProduc", controllerProduct.offerProduct);
router.get("/listProduct", controllerProduct.listProducts);
router.get("/filterProducts", controllerProduct.filterProducts);
router.get("/detail", controllerProduct.detailProduct);
router.get("/search", controllerProduct.searchProduct)

router.get("/createProduct", controllerProduct.createProduct);

module.exports = router;