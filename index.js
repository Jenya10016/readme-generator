var inquirer = require('inquirer');
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
        message: 'Please add contribution guidlines',
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
        choice: 'License',
        name: 'license',
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });