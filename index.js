// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        message :'What is your Project Title?',
        name: 'projectTitle',
        type: 'input'
    },
    {
        message: 'What is your Name?',
        name: 'authorName',
        type: 'input'
    },
    {
        message: 'Give a description of your project',
        name: 'description',
        type: 'input'
    },
    {
        message: 'What technologies did you use in this project?',
        name: 'technologies',
        type: 'input'
    },
    { 
        message: 'When did you finish this project',
        name: 'finishDate',
        type: 'input'
    }
];

//Function that promts the user for data
function promptQuestions(question){
    inquirer
        .prompt(question)
        .then(answers => {
            let projectTitle = answers.projectTitle;
            let authorName = answers.authorName;
            let description = answers.description;
            let technologies = answers.technologies;
            let finishDate = answers.finishDate;
            let answersArray = { projectTitle, authorName, description, technologies, finishDate };
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
