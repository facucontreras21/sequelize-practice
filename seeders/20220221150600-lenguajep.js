"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "LenguajePs",
      [
        {
          nombre: "Java",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "JavaScript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "PHP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Go",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "C++",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("LenguajePs", null, {});
  },
};
