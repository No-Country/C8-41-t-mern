const express = require("express");
const router = express.Router();
const controller = require("../controller/products");

router.get("/", controller.getProducts);

module.exports = router;
