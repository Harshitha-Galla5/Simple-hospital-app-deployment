const express = require("express");
const router = express.Router();
const controller = require("../controllers/appointmentController");

router.post("/", controller.bookAppointment);
router.get("/", controller.getAppointments);

module.exports = router;
