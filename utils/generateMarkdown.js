// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === 'IBM'){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  else if(license === 'MOZILLA'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {return renderLicenseBadge(license)}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {return renderLicenseLink(license)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if(data.license != 'NONE'){
    return `# ${data.projectTitle}
  ## License 
  ${renderLicenseSection(data.license)}
  # Table Of Contents
  [Description](##Description)

  [Installation Instruction](##Installation-Instruction)

  [Usage Information](##Usage-Information)

  [Contribution Guidelines](##Contribution-Guidelines)

  [Testing Instructions](##Testing-Instructions)


  ## Description
  ${data.description}
  ## Installation Instruction
  ${data.installationInstructions}
  ## Usage Information
  ${data.usageInformation}
  ## Contribution Guidelines
  ${data.contributionGuidelines}
  ## Testing Instructions
  ${data.testInstructions}

  ## Questions
  ${data.github}
  ${data.email}
    `;
  }
  else if(data.license == 'NONE'){
    return `# ${data.projectTitle}
  # Table Of Contents
  [Description]()

  [Installation Instruction]()

  [Usage Information]()

  [Contribution Guidelines]()

  [Testing Instructions]()


  ## Description
  ${data.description}
  ## Installation Instruction
  ${data.installationInstructions}
  ## Usage Information
  ${data.usageInformation}
  ## Contribution Guidelines
  ${data.contributionGuidelines}
  ## Testing Instructions
  ${data.testInstructions}

  ## Questions
  GitHub: ${data.github}
  Email: ${data.email}
    `;
  }




}

module.exports = generateMarkdown;
