// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contributing:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Tests:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'GitHub username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Contact Email:',
        name: 'email'
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['Apache License', 'MIT License', 'Mozilla Public License', 'None']
    },
])
    .then(function (answers){
        let tableOfContents = '## Table of Contents'
        if (answers.description != '') {
            tableOfContents += `\n* [Description](#description)`
        }
        if (answers.installation != '') {
            tableOfContents += `\n* [Installation](#installation)`
        }
        if (answers.usage != '') {
            tableOfContents += `\n* [Usage](#usage)`
        }
        if (answers.contributing != '') {
            tableOfContents += `\n* [Contributing](#contributing)`
        }
        if (answers.tests != '') {
            tableOfContents += `\n* [Tests](#tests)`
        }
        if (answers.username != '') {
            tableOfContents += `\n* [GitHub](#github)`
        }
        if (answers.email != '') {
            tableOfContents += `\n* [Contact](#contact)`
        }
        if (answers.license != '') {
            tableOfContents += `\n* [License](#license)`
        }
let markdown = `
# ${answers.title}

`
if (answers.license === 'Apache License'){
    markdown += `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
}

if (answers.license === 'MIT License'){
    markdown += `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
}

if (answers.license === 'Mozilla Public License'){
    markdown += `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    `
}


if (answers.description != '') {
    markdown += `
## Description

${answers.description}

`
}

if (tableOfContents != '') {
    markdown += 
`
${tableOfContents}

`
}

if (answers.installation != '') {
    markdown +=
`## Installation

${answers.installation}

`
}

if (answers.usage != '') {
    markdown +=
`## Usage

${answers.usage}

`
}

if (answers.contributing != '') {
    markdown +=
`## Contributing

${answers.contributing}

`
}

if (answers.tests != '') {
    markdown +=
`## Tests

${answers.tests}

`
}

if (answers.username != '') {
    markdown +=
`## Github

* https://github.com/${answers.username}

`
}

if (answers.email != '') {
    markdown +=
`## Contact

For questions, please contact:
* ${answers.email}

`
}

if (answers.license != '') {
    markdown +=
`## License

${answers.license}

`
}

        fs.writeFile('./README.md', markdown, err => {
            if (err) {
              console.error(err);
            }})
})

