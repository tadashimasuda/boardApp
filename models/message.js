'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    content: DataTypes.STRING
  }, {
    underscored: true,
  });
  message.associate = function(models) {
    // associations can be defined here
    message.hasMany(models.reply);
  };
  return message;
};