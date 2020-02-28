"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Games",
      "game_photo",
      Sequelize.STRING,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Games",
      "game_photo",
      Sequelize.STRING,
      {}
    );
  }
};
