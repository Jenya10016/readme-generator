function generateReadMe(answers) {
return `
# ${answers.title}

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
