'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LenguajeP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LenguajeP.belongsToMany(models.Usuario, {
        through: 'Usuario_LenguajeP',
        as: 'usuarios',
        foreignKey: 'LenguajePId',
      })
    }
  }
  LenguajeP.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LenguajeP',
  });
  return LenguajeP;
};