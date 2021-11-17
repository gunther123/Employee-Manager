const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Game16@@',
    database: 'org'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;