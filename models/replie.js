'use strict';
module.exports = (sequelize, DataTypes) => {
  const replie = sequelize.define('replie', {
    message_id: DataTypes.INTEGER,
    content:'char()',
  }, {
    underscored: true,
  });
  replie.associate = function(models) {
    // associations can be defined here
    replie.belongsTo(models.message);
  };
  return replie;
};