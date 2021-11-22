const inquirer = require('inquirer');
const {mainMenuPrompt} = require('../prompts/prompts')

const promptUsers = async () =>{
    const {chosen} = require('./chosenCommand.js')
    const answers_1 = await inquirer.prompt(mainMenuPrompt);
    chosen(answers_1);
    }

module.exports = {promptUsers};