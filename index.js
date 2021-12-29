const inquirer = require('inquirer');
const generateReadMe = require("./generateReadMe")
const fs = require('fs');
inquirer
    /* Pass your questions in here */
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
            'License1',
            'License2',
            'License3',
        ],
        name: 'license',
      }
  ])
  .then((answers) => {
    // Use user feedback 
    // FileSystem.writeFile(`${answers.title}.jason`, 
    // JSON.stringify(answers, null, 2), 
    // err => err ? console.error(err) : console.log('Success'));
    generateReadMe(answers)



    console.log("answers", answers);

    fs.writeFile("README.md", generateReadMe(answers), function (err) {
        console.log(err);
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