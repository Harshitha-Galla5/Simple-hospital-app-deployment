const express = require("express");
const router = express.Router();
const controller = require("../controllers/doctorController");

router.post("/", controller.addDoctor);

module.exports = router;
