const express = require("express");
const router = express.Router();
const controller = require("../controllers/patientController");

router.post("/", controller.addPatient);

module.exports = router;
