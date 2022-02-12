//Importar Fastify
const fastify = require("fastify")({
    logger: true,
    pluginTimeout: 10000,
});

//importar clase usuario
const user = require("./user.js");

//Inicializar servidor Fastify
fastify.listen(process.env.PORT || 3000, "0.0.0.0", (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});

//Endpoints de la api rest
fastify.get("/usuarios", user.getAll);

fastify.post("/usuarios", user.add);

fastify.put("/usuarios/:id", user.modifyById);

fastify.delete("/usuarios/:id", user.deleteId);

fastify.get("/usuarios/:id", user.getById);