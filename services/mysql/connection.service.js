const mysql = require("mysql2");

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

module.exports = connection;