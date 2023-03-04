const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Calendario = sequelize.define(
    "calendario",
    {
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey: true,
      },
      full: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  // Generar las fechas y guardarlas en la base de datos
  Calendario.sync().then(() => {
    generarFechas().forEach((fecha) => {
      Calendario.findOrCreate({ where: { fecha: fecha } });
    });
  });

  return Calendario;
};
