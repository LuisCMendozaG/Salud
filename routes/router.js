const express = require("express");
const router = express.Router();
const auth = require("../middlewares/middlewares");

const PacienteController = require("../core/controllers/Paciente.controller");
const MedicoController = require("../core/controllers/Medico.controller");
const CitaController = require("../core/controllers/Cita.controller");

router.post("/salud/agregarPaciente", PacienteController.save);
router.post("/salud/agregarMedico", MedicoController.save);
router.post("/salud/agregarCita", CitaController.save);
router.get("/salud/consultarCitas", auth.tokenGetCitas, CitaController.get);
router.get("/salud/login", PacienteController.login);

module.exports = router;