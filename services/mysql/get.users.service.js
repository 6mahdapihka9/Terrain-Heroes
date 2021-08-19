const connection = require("./connection.service");

const getUsers = () => {
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