const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTab = require('console.table');
const Choice = require('inquirer/lib/objects/choice');

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

//Create function to start inquirer prompts

//Not working yet, chosen() needs to be moved to it's own js file in lib folder
const promptUsers = () =>{
return inquirer.prompt(mainMenu)
.then((answers) =>{
    chosen(answers);
})
}


//Create inquirer questions
const mainMenu = [ {
    type: 'list',
    name: 'choices',
    message: "What would you like to do?",
    choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'No Action']
  }];



  const addDept = [
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

  const addRole = [];
  
  const addEmp =[];

  const updateEmp = [];

//Create switch case for all different options

//Create queries per option