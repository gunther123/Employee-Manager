const connection = require('../../db/connection.js');
const conTab = require('console.table');
const {promptUsers} = require('./promptUser')

viewDepts = () => {
    console.log('Displaying all departments!\n');
    var query = `SELECT department.id, department.dep_name AS department FROM department`;

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        
        promptUsers()
    })
};


//Displays all Roles in DB
viewRoles = () => {
    console.log('Displaying all roles!\n');
    let query = `SELECT roles.id, roles.title AS roles, department.dep_name as department
                FROM roles
                INNER JOIN department ON roles.department_id = department.id`;

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        promptUsers();
    })
};

//Displays all Employees in DB
viewEmps = () => {
    console.log('Displaying all Employees!\n');
    let query = `SELECT employee.id, 
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
        promptUsers()
    })};

module.exports = {viewEmps, viewRoles, viewDepts};