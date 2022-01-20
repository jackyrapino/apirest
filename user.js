const user = {};

var sql = require('mysql')

const connection = sql.createPool({
    host: 'sql533.main-hosting.eu',
    user: 'u716697139_jacky',
    password: 'Jacky123',
    database: 'u716697139_apirestjacky' //Name DB
});

user.getAll = (req, res) => {
    const consultaUser = 'SELECT * FROM Usuarios'
    connection.query(consultaUser, (error, resultados) => {
        if (resultados.length > 0) {
            res.send(resultados)
        }else{
            res.statusCode = 503
            res.send("no hay usuarios");
            
        }
    })


}

module.exports = user;

