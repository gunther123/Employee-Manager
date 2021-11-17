//Create switch case for all different options
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
        closeApp();
    }
  }
  module.exports = {chosen};