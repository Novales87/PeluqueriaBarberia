const {Calendar} = require ('../db');

const createCalendar = async() => {
    //Create calendar (30 days from now)
    const dates = [];
    const actuallyDate = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(actuallyDate.getFullYear(), actuallyDate.getMonth(), actuallyDate.getDate() + i);
      const day = {
        date,
        full: false
      };
      dates.push(day);
    }
    
    const newCalendar = await Calendar.create({
       date : dates 
    })

    return newCalendar;
}
const getCalendar = async(id) => {
    let foundCalendar =  await Calendar.findByPk(id)
    return foundCalendar;
}

const getAllCalendars = async() => {
    let foundAllCalendars = await Calendar.findAll();
    return foundAllCalendars;
}

module.exports = {createCalendar, getCalendar,getAllCalendars}