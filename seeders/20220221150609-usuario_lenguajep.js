"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Usuario_LenguajePs",
      [
        {
          UsuarioId: 1,
          LenguajePId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          LenguajePId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Usuario_LenguajePs", null, {});
  },
};
