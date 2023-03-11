const {Router} = require("express");
const { Calendar } = require("../db");
const router = Router();

const { createCalendar, getCalendar, getAllCalendars, putCalendar ,updateDates } = require("../controllers/calendar")

router.post("/", async(req,res) => {
    const {id,start,final} = req.body
    let newCalendar = await createCalendar(id,start,final);
    res.status(200).send(newCalendar)
})
router.get("/:id", async(req,res) => {
    const {id} = req.params
    let foundCalendar = await getCalendar(id)
    res.status(200).send(foundCalendar)
})

router.get("/all/all", async(_req,res) => {
    let allCalendars = await getAllCalendars();
    res.status(200).send(allCalendars)
})

router.put("/", async (req, res) => {
    let {id , dates , hours} = req.body
    await putCalendar(id, dates, hours)
    res.status(200).send("succes")
})

router.put("/update", async (req,res) => {

})

module.exports = router;