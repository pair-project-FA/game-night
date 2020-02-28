"use strict";
module.exports = (sequelize, DataTypes) => {
  class Game extends sequelize.Sequelize.Model {}

  Game.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      max_player_count: DataTypes.INTEGER,
      play_time: DataTypes.INTEGER,
      game_photo: DataTypes.STRING
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
