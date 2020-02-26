"use strict";
module.exports = (sequelize, DataTypes) => {
  class Game extends sequelize.Sequelize.Models {}

  Game.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      max_player_count: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Game"
    }
  );

  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};
