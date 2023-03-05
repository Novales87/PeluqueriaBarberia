const {Router} = require("express");
const { Calendar } = require("../db");
const router = Router();

const { createCalendar, getCalendar, getAllCalendars } = require("../controllers/calendar")

router.get("/", async(_req,res) => {
    let newCalendar = await createCalendar();
    res.status(200).send(newCalendar)
})
router.get("/:id", async(req,res) => {
    const {id} = req.params
    let foundCalendar = await getCalendar(id)
    res.status(200).send(foundCalendar)
})

router.get("/all", async(_req,res) => {
    let allCalendars = await getAllCalendars();
    res.status(200).send(allCalendars)
})

module.exports = router;