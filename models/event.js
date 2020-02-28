"use strict";

module.exports = (sequelize, DataTypes) => {
  class Event extends sequelize.Sequelize.Model {
    getDate() {
      var d = new Date(this.start_date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
  }

  Event.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      GameId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    },
    {
      hooks: {
        beforeCreate: (event, options) => {
          if (event.name == "") {
            event.name = "Gathering at " + event.location;
          }
        }
      },
      sequelize,
      modelName: "Event"
    }
  );
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Game);
    Event.belongsTo(models.User);
    Event.belongsToMany(models.User, { through: "EventUsers" });
  };
  return Event;
};
