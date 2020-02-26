"use strict";
module.exports = (sequelize, DataTypes) => {
  class Admin extends sequelize.Sequelize.Model {}

  Admin.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      telephone_number: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Admin"
    }
  );

  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};
