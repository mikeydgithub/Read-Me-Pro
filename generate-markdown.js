// TODO: Create a function to write README file
const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./ReadMe.md', pageTemplate(fileContent), err => {
          //if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
              reject (err);
              //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function
              return;
          }

          //if everything went well, resolve the promise and send the succesful data to the `.then()` method
          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};
const pageTemplate =  templateArr => {
  return `

  ${templateArr.license.map(function buildBagde (userChoice){
    return renderLicenseLink (userChoice)
  })} 
  # Title 
    * ${templateArr.title}
  ## Installation
    * ${templateArr.installation}
  ## Usage
    * ${templateArr.usage}
  ## Contribution
    * ${templateArr.contribution}
  ## Test
    * ${templateArr.test}
  ## License
    * ${templateArr.license}
  ## Description
    * ${templateArr.description}
  `
};

// Create the array for badge types
const badgeType = 
[
  {userChoice: 'GPL', badgeUrl: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
  {userChoice: 'Apache', badgeUrl:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
  {userChoice: 'BSD', badgeUrl:'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
  {userChoice: 'MIT', badgeUrl:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}
]

// Use renderLicenseBadge to take license and set it equal to userChoice


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const renderLicenseBadge = license => {
//   return ['Apache', 'MIT', 'GPL', 'BSD', 'N/A']
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  return badgeType.filter (badgeData => badgeTest(badgeData, license))[0].badgeUrl
}
function badgeTest (badgeData, license) {
  return badgeData.userChoice == license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicenseSection = license => {

// }

// TODO: Create a function to generate markdown for README
const generateReadMe = data => {
  return `# ${data.title}

`;
}
module.exports = { writeFile };