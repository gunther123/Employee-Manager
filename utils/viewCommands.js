const connection = require('../db/connection.js');
const conTab = require('console.table');

viewEmps = () => {
    console.log('Showing all employees...\n');
    var query = `SELECT employee.id, 
                employee.first_name, 
                employee.last_name, 
                roles.title, 
                department.dep_name AS department,
                roles.salary, 
                CONCAT (manager.first_name, " ", manager.last_name) AS manager
                FROM employee
                LEFT JOIN roles ON employee.role_id = roles.id
                LEFT JOIN department ON roles.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        connection.end();
    })};

module.exports = {viewEmps};