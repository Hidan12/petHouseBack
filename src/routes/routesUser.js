const express = require("express");
const router = express.Router();

const controllerUser = require("../controllers/controllerUser");

router.post("/searchUser", controllerUser.searchUser);
module.exports = router;