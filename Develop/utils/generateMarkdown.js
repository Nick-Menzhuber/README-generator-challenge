// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n
## Description \n
${data.description}\n
\n
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
## How to Contribute \n
${data.contributing} \n
\n
## Tests \n
${data.tests} \n
\n
## Contact
I can be reached at ${data.email} or on GitHub (https://github.com/${data.github}) with questions about this project!\n
## License \n
${data.license}`;
}

module.exports = generateMarkdown;