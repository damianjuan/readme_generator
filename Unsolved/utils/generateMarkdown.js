generateBadge = () => {
  var badge;
  switch (data.status) {
    case "Complete":
      return badge = `https://img.shields.io/badge/<Build>-<Complete>-<green>`
      break;
    case "In Progress":
      return badge = `https://img.shields.io/badge/<Build>-<In Progress>-<yellow>`
      break;
    case "Not Working":
      return badge = `https://img.shields.io/badge/<Build>-<Not Working>-<red>`
      break;

    default:
      break;
  }

}


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
