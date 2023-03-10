const { Barber, Calendar } = require("../db");

const createCalendar = async (id, start, final) => {
  const barberFound = await Barber.findByPk(id);
  console.log(barberFound);
  //Create Schedule
  let horaInicio = start;
  let horaFinal = final;
  const franjaHoraria = [];
  const horaInicioParts = horaInicio.split(":");
  const horaFinalParts = horaFinal.split(":");
  let hora = parseInt(horaInicioParts[0]);
  let minutos = parseInt(horaInicioParts[1]);

  while (
    hora < parseInt(horaFinalParts[0]) ||
    (hora === parseInt(horaFinalParts[0]) &&
      minutos <= parseInt(horaFinalParts[1]))
  ) {
    const horarioFraccionado = {
      hora: `${hora.toString().padStart(2, "0")}:${minutos
        .toString()
        .padStart(2, "0")}`,
      reserved: false,
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
    const date = new Date(
      actuallyDate.getFullYear(),
      actuallyDate.getMonth(),
      actuallyDate.getDate() + i
    );
    const day = {
      date,
      full: false,
      schedule: franjaHoraria,
    };
    dates.push(day);
  }

  let newCalendar = await Calendar.create({
    date: dates,
  });

  await barberFound.addCalendar(newCalendar);

  return newCalendar;
};
const getCalendar = async (id) => {
  let foundCalendar = await Calendar.findByPk(id);
  return foundCalendar;
};

const getAllCalendars = async () => {
  let foundAllCalendars = await Calendar.findAll();
  return foundAllCalendars;
};

const reserveSchedule = async (req, res) => {
  try {
    const { calendarId, date, hora } = req.body;
    const calendar = await Calendar.findOne({ where: { uuid: calendarId } });
    if (!calendar) {
      throw new Error("El calendario no existe");
    }
    const selectedDateSchedule = calendar.date.find((d) => d.date === date);
    if (!selectedDateSchedule) {
      throw new Error("El día seleccionado no está disponible");
    }
    const selectedTime = selectedDateSchedule.schedule.find(
      (s) => s.hora === hora
    );
    if (!selectedTime) {
      throw new Error("El horario seleccionado no está disponible");
    }
    if (selectedTime.reserved) {
      throw new Error("El horario ya ha sido reservado");
    }
    selectedTime.reserved = true;
    await calendar.save();
    res.status(200).json({
      message: "Horario reservado con éxito",
      schedule: selectedTime,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCalendar,
  getCalendar,
  getAllCalendars,
  reserveSchedule,
};
