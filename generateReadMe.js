function generateReadMe(answers) {
return `
# ${answers.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contribution)
- [Testing](#testInstructions)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Constribution
${answers.contribution}

## testInstructions
${answers.testInstructions}

## License
${answers.license}
`
}

module.exports = generateReadMe
