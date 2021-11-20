const connection = require('../db/connection.js')
const inquirer = require('inquirer')
const {addDeptPrompt, addRolePrompt, addEmpPrompt} = require('./prompts/prompts')
const {viewDepts, viewRoles} = require('./viewCommands');


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


    addRole = () => {
        inquirer.prompt(addRolePrompt)
        .then( answer => {
            const param = [answer.role, answer.salary];
            
            const roleSql = `SELECT dep_name, id FROM department`; 
      
            connection.query(roleSql, (err, data) => {
              if (err) throw err; 
          
              const dept = data.map(({ dep_name, id }) => ({ name: dep_name, value: id }));
      
              inquirer.prompt([
              {
                type: 'list', 
                name: 'dept',
                message: "What department is this role in?",
                choices: dept
              }
              ])
        .then(deptChosen => {
              const dept = deptChosen.dept;
              param.push(dept);
  
              const sql = `INSERT INTO roles (title, salary, department_id)
                          VALUES (?, ?, ?)`;
  
              connection.query(sql, param, (err, result) => {
                if (err) throw err;
                console.log('Added ' + answer.role + " to roles!"); 
  
                viewRoles();
         });
       });
     })
    })
}
    
module.exports = {addDept};