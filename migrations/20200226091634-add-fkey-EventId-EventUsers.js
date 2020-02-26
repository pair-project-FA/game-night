"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("EventUsers", ["EventId"], {
      type: "foreign key",
      name: "fkey_EventId_EventUsers",
      references: {
        table: "Events",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "EventUsers",
      "fkey_EventId_EventUsers"
    );
  }
};
