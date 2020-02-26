"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("EventUsers", ["UserId"], {
      type: "foreign key",
      name: "fkey_UserId_EventUsers",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "EventUsers",
      "fkey_UserId_EventUsers"
    );
  }
};
