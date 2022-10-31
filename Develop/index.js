// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
     {
      type: 'input',
      name: 'title',
      message: 'Please enter the title of your project:',
    },
    {
        type: 'input',
        name: 'shortname',
        message: 'Please enter a short name or nickname for your project (this will go into the filename):',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information for your project:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter any credits that should be included, or enter "N/A":'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter guidelines for project contributions:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any testing notes for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project:',
        choices: ['MIT', 'Apache', 'GNU GPL v3', 'Perl', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:',
    },
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log( err ? err : "File successfully written!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile(`./new_readmes/${data.shortname}README.md`, generateMarkdown(data))
    })
}

// Function call to initialize app
init();