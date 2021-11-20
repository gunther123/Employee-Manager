//Create switch case for all different options
const connection = require('../db/connection.js')
const {viewEmps,viewRoles, viewDepts} = require('./viewCommands')
const {addDept} = require('./addCommands')

const chosen = function(answers){
    switch(answers.choice){
      case 'View all departments':
        viewDepts();
        break;
      case 'View all roles':
        viewRoles();
        break;
      case 'View all employees':
        viewEmps();
        break;
      case 'Add a department':
        addDept();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmp();
        break;
      case 'Update an employee role':
        updateEmpRole();
        break;
      default:
        console.log('Connection to database terminated.')
        console.log('Thanks for using Employee Manager!')
        console.log('Goodbye!')
        connection.end();
        break;
    }
  }
  module.exports = {chosen};