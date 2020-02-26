"use strict";
module.exports = (sequelize, DataTypes) => {
  class EventUser extends sequelize.Sequelize.Models {}

  EventUser.init(
    {
      EventId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "EventUser"
    }
  );
  EventUser.associate = function(models) {
    // associations can be defined here
    EventUser.belongsTo(models.User);
    EventUser.belongsTo(models.Event);
  };
  return EventUser;
};
