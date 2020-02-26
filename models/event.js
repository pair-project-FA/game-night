"use strict";
module.exports = (sequelize, DataTypes) => {
  class Event extends sequelize.Sequelize.Model {}

  Event.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      GameId: DataTypes.INTEGER,
      AdminId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Event"
    }
  );
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsToMany(models.User, { through: "EventUsers" });
  };
  return Event;
};
