const {Barber,Calendar} = require ('../db');

const createCalendar = async(id,start,final) => {
        const barberFound = await Barber.findByPk(id);
        console.log(barberFound)
    //Create Schedule 
        let horaInicio = start
        let horaFinal = final
        const franjaHoraria = [];
        const horaInicioParts = horaInicio.split(':');
        const horaFinalParts = horaFinal.split(':');
        let hora = parseInt(horaInicioParts[0]);
        let minutos = parseInt(horaInicioParts[1]);
      
        while (hora < parseInt(horaFinalParts[0]) || (hora === parseInt(horaFinalParts[0]) && minutos <= parseInt(horaFinalParts[1]))) {
          const horarioFraccionado = {
            hora: `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`,
            reserved: false
          };
          franjaHoraria.push(horarioFraccionado);
          minutos += 15;
          if (minutos === 60) {
            minutos = 0;
            hora += 1;
          }
        }
    //Create calendar (30 days from now)

    const dates = [];
    const actuallyDate = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(actuallyDate.getFullYear(), actuallyDate.getMonth(), actuallyDate.getDate() + i);
      const day = {
        date,
        full: false,
        schedule:franjaHoraria
      };
      dates.push(day);
    }
    
    let newCalendar = await Calendar.create({
       date : dates 
    })

    await barberFound.addCalendar(newCalendar)

    return newCalendar
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