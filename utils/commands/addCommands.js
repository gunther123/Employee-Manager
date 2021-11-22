const connection = require('../../db/connection.js')
const inquirer = require('inquirer')
const {addDeptPrompt, addRolePrompt, addEmpNamePrompt, addEmpRolePrompt} = require('../prompts/prompts')
const {viewDepts, viewRoles, viewEmps} = require('./viewCommands');


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
            
            const roleQuery = `SELECT dep_name, id FROM department`; 
      
            connection.query(roleQuery, (err, data) => {
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
addEmp = () => {
    inquirer.prompt(addEmpNamePrompt)
      .then(answer => {
      const param = [answer.fistName, answer.lastName]
  
      const roleQuery = `SELECT roles.id, roles.title FROM roles`;
    
      connection.query(roleQuery, (err, data) => {
        if (err) throw err; 
        
        const roles = data.map(({ id, title }) => ({ name: title, value: id }));
        
  
        inquirer.prompt({
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: roles
        })
              .then(roleChosen => {
                const role = roleChosen.role;
                param.push(role);
  
                const managerQuery = `SELECT * FROM employee`;
  
                connection.query(managerQuery, (err, data) => {
                  if (err) throw err;
  
                  const managers = data.map(({ id, first_name, last_name }) => ({ name: first_name + " "+ last_name, value: id }));
  
                  inquirer.prompt([
                    {
                      type: 'list',
                      name: 'manager',
                      message: "Who is the employee's manager?",
                      choices: managers
                    }
                  ])
                    .then(managerChosen => {
                      const manager = managerChosen.manager;
                      param.push(manager);
  
                      const sqlInsert = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                      VALUES (?, ?, ?, ?)`;
  
                      connection.query(sqlInsert, param, (err, result) => {
                      if (err) throw err;
                      console.log("Employee has been added!")
  
                      viewEmps();
                });
              });
            });
          });
       });
    });
  };
    
module.exports = {addDept, addRole, addEmp};