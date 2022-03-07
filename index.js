// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require ('./generate-markdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {//Add Title
        type: 'input',
        name: 'title',
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
    {//Add Description
        type: 'input',
        name: 'description',
        message: "Please add a description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            
            }
        }
    },
    {//Add Installation
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for the Read Me file.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please list instructions for your project.');
                return false;
            
            }
        }
    },
    {//Add Useage
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please include usage information.');
                return false;

            }
        }
    },
    {//Add Contribution
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
    {//Add Tests
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
    {//Add license
        type: 'checkbox',
        name: 'license',
        message: 'Select which licenses your project uses. If N/A press Enter.',
        choices: ['Apache', 'MIT', 'GPL', 'BSD']
    },
    {//Add Username
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub profile username.'
    },
    {//Add Contact
        type: 'input',
        name: 'contact',
        message: 'Please include your email and any additional contact information.'

    }
    ])//Then log the reults of projectData and wright if project data exists return writeFile called projectData. Else return back to the start of the function.
    .then(projectData => {
            console.log(projectData)
            if (projectData){
                return writeFile(projectData);
            } else {
                return
            }
        });
};


// Function call to initialize app
promptUser()


