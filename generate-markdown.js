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

  ${renderLicenseBadge (templateArr.license)}
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




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  return 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  return
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

}

// TODO: Create a function to generate markdown for README
const generateReadMe = data => {
  return `# ${data.title}

`;
}
module.exports = { writeFile };