const connection = require('../../db/connection')
const inquirer = require("inquirer")

updateEmpRole = () => {
    const employeeQuery = `SELECT * FROM employee`;
  
    connection.query(employeeQuery, (err, data) => {
      if (err) throw err; 
  
    const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " "+ last_name, value: id }));
  
      inquirer.prompt([
        {
          type: 'list',
          name: 'name',
          message: "Which employee would you like to update?",
          choices: employees
        }
      ])
        .then(empChosen => {
          const employee = empChosen.name;
          const param = []; 
          param.push(employee);
  
          const roleQuery = `SELECT * FROM roles`;
  
          connection.query(roleQuery, (err, data) => {
            if (err) throw err; 
  
            const roles = data.map(({ id, title }) => ({ name: title, value: id }));
            
              inquirer.prompt([
                {
                  type: 'list',
                  name: 'role',
                  message: "What is the employee's new role?",
                  choices: roles
                }
              ])
                  .then(roleChosen => {
                  const role = roleChosen.role;
                  param.push(role); 
                  
                  let employee = param[0]
                  param[0] = role
                  param[1] = employee 

  
                  const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
  
                  connection.query(sql, param, (err, result) => {
                    if (err) throw err;
                  console.log("Employee has been updated!");
                
                  viewEmps();
            });
          });
        });
      });
    });
  };

  module.exports = updateEmpRole;