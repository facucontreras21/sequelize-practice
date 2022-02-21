const db = require("./models");

const main = async () => {
  try {
    const usuarios = await db.Usuario.findAll({
      include: [
        {
          model: db.LenguajeP,
          as: "lenguajesProgramacion",
          attributes: { exclude: ["createdAt", "updatedAt"] },
          through: { attributes: [] },
        },
      ],
    });
    console.log(JSON.stringify(usuarios));
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

main();
