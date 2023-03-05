const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const allBarbers = require("./allBarbers.js");
const router = Router();
const calendarRoute = require("./calendarRoutes.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/barbers", allBarbers);

router.use("/calendar", calendarRoute);

module.exports = router;
