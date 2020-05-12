function generateMarkdown(data) {
  return `
# ${data.title}
${data.description}

##Table of Contents
${data.table}

### Installing
${data.install}

### Usage
${data.usage}

### Testing
${data.test}


### License 
${data.license}

### Contributors
${data.contributors}

### Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
