const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTab = require('console.table');

// mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Game16@@',
    database: 'org'
});

connection.connect(err => {
    if (err) throw err;
    console.log(`You've connected to the org Database!`)
});