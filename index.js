const mysql = require('mysql2');
const connection = require('./db/connection.js')
const inquirer = require('inquirer');
const conTab = require('console.table');
const {mainMenuPrompt, addDeptPrompt, addRolePrompt, addEmpPrompt, updateEmpPrompt} = require('./utils/prompts/prompts.js');
const {chosen} = require('./utils/chosenCommand');



//Prompts the user to choose what to do in the app
const promptUsers = () =>{
  return inquirer.prompt(mainMenuPrompt)
  .then((answers) =>{
      chosen(answers);
  })
  }

  promptUsers()


//Create queries per option