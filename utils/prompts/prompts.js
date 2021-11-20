//Create inquirer questions
const mainMenuPrompt = [ {
    type: 'list',
    name: 'choice',
    message: "What would you like to do?",
    choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit']
  }];

  const addDeptPrompt = [
    {
    type: 'input',
    name: 'addDept',
    message: 'What is the name of the new department?',
    validate: addDept => {
        if (addDept) {
            return true;
        } else {
            console.log('Please enter a valid name for the department!');
            return false;
        }
    }
}
];

  const addRolePrompt = [
    {
    type: 'input', 
    name: 'role',
    message: "What is the name of the role you want to add?",
    validate: addRole => {
        if (addRole) {
            return true;
        } else {
        console.log('Please enter a role');
            return false;
            }
        }
    },
      {
        type: 'input', 
        name: 'salary',
        message: "What is the salary of this role?",
        validate: addSalary => {
          if (addSalary) {
              return true;
          } else {
              console.log('Please enter a salary');
              return false;
          }
        }
      }
  ];
  
  const addEmpNamePrompt =[
    {
      type: 'input',
      name: 'fistName',
      message: "What is the employee's first name?",
      validate: addFirst => {
        if (addFirst) {
            return true;
        } else {
            console.log('Please enter a first name');
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'lastName',
      message: "What is the employee's last name?",
      validate: addLast => {
        if (addLast) {
            return true;
        } else {
            console.log('Please enter a last name');
            return false;
        }
      }
    }
  ];

  const addEmpRolePrompt = [
    {
      type: 'list',
      name: 'role',
      message: "What is the employee's role?",
      choices: []
    }
  ]

  const updateEmpPrompt = [
    {
      type: 'list',
      name: 'name',
      message: "Which employee would you like to update?",
      choices: []
    },
    {
      type: 'list',
      name: 'role',
      message: "What is the employee's new role?",
      choices: []
    }
  ];

  module.exports = {mainMenuPrompt,addDeptPrompt, addRolePrompt, addEmpNamePrompt, addEmpRolePrompt, updateEmpPrompt};