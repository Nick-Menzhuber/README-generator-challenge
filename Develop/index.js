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
        choices: ['MIT', 'Apache', 'GNU GPL v3', 'Perl']
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

/*
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;


  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
  */