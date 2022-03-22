const inquirer = require('inquirer');
const generateReadMe = require("./generateReadMe")
const fs = require('fs');
inquirer
    /* Pass questions */
  .prompt([
      {
        type: 'input',
        message: 'Add title of your project',
        name: 'title',
      },

      {
        type: 'input',
        message: 'Please add a description of your project',
        name: 'description',
      },

      {
        type: 'input',
        message: 'Please add installation instructions',
        name: 'installation',
      },

      {
        type: 'input',
        message: 'Please add usage information',
        name: 'usage',
      },

      {
        type: 'input',
        message: 'Please add contribution guidelines',
        name: 'contribution',
      },

      {
        type: 'input',
        message: 'Please explain and add test instructions',
        name: 'testInstructions',
      },
      
      {
        type: 'list',
        message: 'Please choose your license',
        choices: [
            'Apache 2.0 License',
            'MIT',
            'ISC',
            'None',
        ],
        name: 'license',
      }
  ])
  .then((answers) => {
    // Use user feedback 

    if (answers.license === "Apache 2.0 License") {
        answers.license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";    
    } else if (answers.license === "MIT") {
        answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (answers.license === "ISC") {
        answers.license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    } 

    console.log("answers", answers);

    fs.writeFile("PROREADME.md", generateReadMe(answers), function (err) {
    })
})
  .catch((error) => {
      console.log('Error: ' + error)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });