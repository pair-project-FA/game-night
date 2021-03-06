"use strict";
module.exports = (sequelize, DataTypes) => {
  class EventUser extends sequelize.Sequelize.Model {}

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
    EventUser.belongsTo(models.Event);
    EventUser.belongsTo(models.User);

  };
  return EventUser;
};
