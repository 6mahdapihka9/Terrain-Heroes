const mysql = require("mysql2");

const addUser = () => {
    const connection = mysql.createConnection((process.env.PORT) ? {
        host: "eu-cdbr-west-01.cleardb.com",
        user: "bedce05604ab0f",
        database: "terrain_heroes",
        password: "09dc02a8"
    } : {
        host: "localhost",
        user: "root",
        database: "terrain_heroes",
        password: ""
    });

    let query = "INSERT INTO `users` (`id`, `login`, `password`, `name`, `age`, `session`) VALUES ( 'Tom', '1234', 'Tom', '24', 'jrRsfKWGF_'), ( 'zul_jin_', 'balthazar', 'Baal', '24', 'kBBsfBXbY2');";

    connection.query(query, function (err, results, fields) {
        console.log(results);
    });

    connection.end(function (err) {
        if (err)
            return console.log("Ошибка: " + err.message);
        console.log("Подключение закрыто");
    });
}

module.exports = addUser;