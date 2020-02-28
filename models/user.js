"use strict";
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}

  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      telephone_number: DataTypes.STRING,
      behaviour_score: DataTypes.INTEGER,
      game_score: DataTypes.INTEGER,
      photo: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User"
    }
  );

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Event);
    User.belongsToMany(models.Event, { through: "EventUsers" });
  };
  return User;
};
