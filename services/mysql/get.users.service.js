// const connection = require("./connection.service");
const mysql = require("mysql2");

const getUsers = () => {
    const connection = mysql.createConnection((process.env.PORT) ? {
        host: "eu-cdbr-west-01.cleardb.com",
        user: "bedce05604ab0f",
        database: "heroku_a83e85676214baf",
        password: "09dc02a8"
    } : {
        host: "localhost",
        user: "root",
        database: "terrain_heroes",
        password: ""
    });

    let query = "SELECT * FROM users";

    connection.query(query, function (err, results, fields) {
        console.log(results);
    });

    connection.end(function (err) {
        if (err)
            return console.log("Ошибка: " + err.message);
        console.log("Подключение закрыто");
    });
}

module.exports = getUsers;