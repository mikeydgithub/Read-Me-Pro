// TODO: Create a function to write README file
const fs = require('fs');

//Set up a constant to write a file. Tell it to create a function called fileContent.
const writeFile = fileContent => {
  //Return new promise for resolving and rejecting
  return new Promise((resolve, reject) => {
    //Writefile is required in the index. Passing in the file to be created, using the pageTemplate using the file content otherwise go through err.
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


//Create the pageTemplate used from line 9. Create the templateArr to create everything that is going to be printed for the pageTemplate then return.
//Take templaceArr and use dot notation to create a license that takes from the parent templateArr. Map to a function buildeBadge using what the userpicked called (userchoice).
//Return renderLicenseLink line 99 refering to what the user has picked.
//Create teable of contents in the pageTemplate. The text that will be entered into the readme file.
const pageTemplate =  templateArr => {
  return `

  ${templateArr.license.map(function buildBagde (userChoice){
    return renderLicenseLink (userChoice)
  })} 

  ## Table of Contents
  1. [Title](#Title)
  2. [Installtion](#Installtion)
  3. [Usage](#Usage)
  4. [Contribution](#Contribution)
  5. [Tests](#Test)
  6. [License](#License)
  7. [Description](#Description)
  8. [Walk through Video](#Video)

  ## Title

  ${templateArr.title}

  ## Installation

  ${templateArr.installation}

  ## Usage

  ${templateArr.usage}

  ## Contribution

  ${templateArr.contribution}

  ## Tests

  ${templateArr.test}

  ## License

  ${templateArr.license.length > 0 ? templateArr.license : 'N/A'}

  ## Description

  ${templateArr.description}

  ## GitHub Username
    
  [https:/github.com/${templateArr.username}](https:/github.com/${templateArr.username})
  
  ## Email and Contact Information
     
  ${templateArr.contact}

  ## Walk through Video
  
  [https://drive.google.com/file/d/1z708DAjTclMJGCnbqT2TAF33nbypx85_/view]
  `
};


//Create the array for badge types.
//Define the userChoice for what ever is picked. Included is the badge and license link. Refer to line 34 and 35. 
const badgeType = 
[
  {userChoice: 'GPL', badgeUrl: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
  {userChoice: 'Apache', badgeUrl:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
  {userChoice: 'BSD', badgeUrl:'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
  {userChoice: 'MIT', badgeUrl:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}
]


//Use renderLicenseBadge to take license and set it equal to userChoice


//TODO: Create a function that returns the license link. If there is no license, return an empty string
const renderLicenseLink = license => {
  //Create a var to take results and using the badgeType filter the badgeData. The badgedata will create a function to test badgeData and license.
  var results = badgeType.filter (badgeData => badgeTest(badgeData, license))
  //Return results length if greater than 0 otherwise if results start from the first index [0] usebadgeUrl based on what is picked.
  return results.length > 0 ? results[0].badgeUrl : ''
}
//Create a function for badgeTest. Taking badgeData, and license. Return badgeData if the user choice equals a lincense.
function badgeTest (badgeData, license) {
  return badgeData.userChoice == license
}

//Expoort the writeFile to the index.
module.exports = { writeFile };