const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Horario = sequelize.define(
    "Horario",
    {
      hora: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reserved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Horario;
};
