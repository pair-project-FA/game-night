"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Events", ["AdminId"], {
      type: "foreign key",
      name: "fkey_AdminId_Events",
      references: {
        table: "Admins",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Events", "fkey_AdminId_Events");
  }
};
