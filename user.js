const user = {};

var sql = require("mysql");

const connection = sql.createPool({
    host: "sql533.main-hosting.eu",
    user: "u716697139_jacky",
    password: "Jacky123",
    database: "u716697139_apirestjacky", //Name DB
});

user.getAll = (req, res) => {
    const consultaUser = "SELECT * FROM Usuarios";

    connection.query(consultaUser, (error, resultados) => {
        if (resultados.length > 0) {
            res.send(resultados);
        } else {
            res.statusCode = 503;
            res.send("no hay usuarios");
        }
    });
};

user.add = (req, res) => {
    const consultaSQL = "INSERT INTO Usuarios SET ?";

    const { nombre, apellido, mail, clave, foto } = req.body; //destructuring

    const newUser = {
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        clave: clave,
        foto: foto,
    };

    connection.query(consultaSQL, newUser, (error, resultados) => {
        if (resultados) {
            res.send(resultados);
        } else {
            res.statusCode = 503;
            res.send("No se pudo agregar");
        }
    });
};

user.modifyById = (req, res) => {
    const idUser = req.params.id;
    const { nombre, apellido, mail, clave, foto } = req.body;

    const consultaSQL = `UPDATE Usuarios SET 
    nombre = '${nombre}',
    apellido = '${apellido}',
    mail = '${mail}',
    clave = '${clave}', 
    foto = '${foto}' WHERE Id_usuario = '${idUser}'`;

    connection.query(consultaSQL, (error, resultados) => {
        if (resultados) {
            res.send(resultados);
        } else {
            res.statusCode = 503;
            res.send(error);
        }
    });
};

user.deleteId = (req, res) => {
    const idUser = req.params.id;

    const consultaSQL = `DELETE FROM Usuarios  
      WHERE Id_usuario = '${idUser}'`;

    connection.query(consultaSQL, (error, resultados) => {
        if (resultados) {
            res.send(resultados);
        } else {
            res.statusCode = 503;
            res.send(error);
        }
    });
};

user.getById = (req, res) => {
    const idUser = req.params.id;

    const consultaSQL = `SELECT * FROM Usuarios WHERE Id_usuario = '${idUser}'`;

    connection.query(consultaSQL, (error, resultados) => {
        if (resultados) {
            res.send(resultados);
        } else {
            res.statusCode = 503;
            res.send(error);
        }
    });
};

module.exports = user;