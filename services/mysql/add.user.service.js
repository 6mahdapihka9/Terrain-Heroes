const connection = require("./connection.service");

const addUser = () => {
    let query = "INSERT INTO `users` (`id`, `login`, `password`, `name`, `age`, `session`) VALUES ( ?, ?, ?, ?, ?);";

    let login = randomString(5),
        password = randomString(5),
        name = randomString(5),
        age = Math.floor(Math.random() * 90) + 10,
        session = randomString(10);

    let value = [login, password, name, age, session];

    connection.query(query, value, function (err, results, fields) {
        console.log(results);
    });

    connection.end(function (err) {
        if (err)
            return console.log("Ошибка: " + err.message);
        console.log("Подключение закрыто");
    });
}

const randomString = (length) => {
    let result = '',
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';

    for (let i = 0; i < length; i++)
        result += chars.charAt(Math.floor(Math.random() * chars.length));

    return result;
}

module.exports = addUser;