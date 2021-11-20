const connection = require('../db/connection.js')
const inquirer = require('inquirer')
const {addDeptPrompt, addRolePrompt, addEmpPrompt} = require('./prompts')
const {viewDepts} = require('./viewCommands')

addDept = () => {
    inquirer.prompt(addDeptPrompt)
        .then(answer => {
            var query = `INSERT INTO department (dep_name)
                        VALUES (?)`;
            connection.query(query, answer.addDept, (err, result) => {
                if (err) throw err;
                console.log('New department "' + answer.addDept + '" has been added.')

                viewDepts();
            });
        });
    };

module.exports = {addDept}