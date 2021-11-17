const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTab = require('console.table');
const {mainMenuPrompt} = require('./utils/prompts');
const {chosen} = require('./utils/chosenCommand');


// mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Game16@@',
    database: 'org'
});

connection.connect(err => {
    if (err) throw err;
    console.log(`You've connected to the org Database!`);

    promptUsers();
});

//Prompts the user to choose what to do in the app
const promptUsers = () =>{
  return inquirer.prompt(mainMenuPrompt)
  .then((answers) =>{
      chosen(answers);
  })
  }


//Create function to start inquirer prompts

//Not working yet, chosen() needs to be moved to it's own js file in lib folder

//Create queries per option