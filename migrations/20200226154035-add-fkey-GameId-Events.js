"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Events", ["GameId"], {
      type: "foreign key",
      name: "fkey_GameId_Events",
      references: {
        table: "Games",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Events", "fkey_GameId_Events");
  }
};
