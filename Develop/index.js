// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'readmename',
        message: 'What is the name of your Read Me? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name for your project.');
                return false;
            
            }
        }
    },
    {
        type: 'input',
        name: 'confirmdescription',
        message: "Please add a description?",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            
            }
        }
    },
    {
        type: 'input',
        name: 'installtioninstructions',
        message: 'Please eneter instructions for the Read Me file.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please list instructions for your project.');
                return false;
            
            }
        }
    },
    {
        type: 'input',
        name: 'usageinformation',
        message: 'Please eneter usage information.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please include usage information.');
                return false;

            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Specify contributions.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contributions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please include tests.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your tests.')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select which licenses your project uses.',
        choices: ['Public Domain', 'Permissive FOSS', 'Copyleft FOSS', 'Freeware/Shareware/Freemium', 'Proprietary License']
    }
    
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser()

.catch(err => {
    console.log(err);
});
