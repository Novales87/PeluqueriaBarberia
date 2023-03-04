const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Schedule",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hour: {
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
};
