// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n
${renderLicenseBadge(data.license)}\n 
## Description \n
${data.description}\n
\n
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contribute](#contribute)
* [Tests](#tests)
* [Contact](#contact)
* [License](#license)

## Installation \n
${data.installation}\n
\n
## Usage \n
${data.usage} \n
\n
## Credits \n
\n
${data.credits} \n
\n
## Contribute \n
${data.contributing} \n
\n
## Tests \n
${data.tests} \n
\n
## Contact
I can be reached at ${data.email} or on GitHub (https://github.com/${data.github}) with questions about this project!\n
## License \n
This project utilizes the following license: ${data.license}`;
}

module.exports = generateMarkdown;