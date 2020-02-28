"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Users",
      "photo",
      Sequelize.STRING,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Users",
      "photo",
      Sequelize.STRING,
      {}
    );
  }
};
