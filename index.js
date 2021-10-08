// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        message:'What is the title of your App?',
        name: 'projectTitle',
        type: 'input'
    },
    {
        message :'Give a description of your application',
        name: 'description',
        type: 'input'
    },
    {
        message: 'Provide any installation instructions for you app',
        name: 'installationInstructions',
        type: 'input'
    },
    {
        message: 'Provide any usage information',
        name: 'usageInformation',
        type: 'input'
    },
    {
        message: 'What are the contributing guidelines of your app?',
        name: 'contributionGuidelines',
        type: 'input'
    },
    { 
        message: 'Provide any test instructions',
        name: 'testInstructions',
        type: 'input'
    },
    {
        message: 'Choose a license',
        name: 'license',
        type: 'list',
        choices: ['NONE', 'MIT', 'IBM', 'MOZILLA']
    },
    {
        message: 'Github username:',
        name: 'github',
        type: 'input'
    },
    {
        message: 'Email Adress:',
        name: 'email',
        type: 'input'
    }
];

//Function that promts the user for data
function promptQuestions(question){
    inquirer
        .prompt(question)
        .then(answers => {
            let projectTitle = answers.projectTitle;
            let description = answers.description;
            let installationInstructions = answers.installationInstructions;
            let usageInformation = answers.usageInformation;
            let contributionGuidelines = answers.contributionGuidelines;
            let testInstructions = answers.testInstructions;
            let license = answers.license;
            let github = answers.guthub;
            let email = answers.email;
            let answersArray = {projectTitle ,description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, github, email };
            let newMarkDown = generateMarkdown(answersArray);
            writeToFile(projectTitle, newMarkDown);
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
        if(err)
            console.log('Error');
    })
}

// TODO: Create a function to initialize app
function init() {
    promptQuestions(questions);
}

// Function call to initialize app
init();
