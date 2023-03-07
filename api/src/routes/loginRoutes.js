//Requires
const { Router } = require('express');
const router = Router();

//Controladores
const { verifyLogin } = require('../controllers/login');

router.post("/", async (req, res) => {
    const loginForm = req.body;
    try {
        return res.status(201).send(await verifyLogin(loginForm));
    } catch (error) {
        return res.status(400).send(error);
    }
})

module.exports = router;