'use strict';
module.exports = (sequelize, DataTypes) => {
  const reply = sequelize.define('reply', {
    message_id: DataTypes.INTEGER,
    content:'char()',
  }, {
    underscored: true,
  });
  reply.associate = function(models) {
    // associations can be defined here
    reply.belongsTo(models.message);
  };
  return reply;
};