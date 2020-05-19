generateBadge = (status) => {
  var badge;
  switch (status) {
    case "Complete":
      return badge = `[![build](https://img.shields.io/badge/Build-Complete-green)](shields.io)`
      break;
    case "In Progress":
      return badge = `[![build](https://img.shields.io/badge/Build-In%20Progress-yellow)](shields.io)`
      break;
    case "Not Working":
      return badge = `[![build](https://img.shields.io/badge/Build-Not%20Working-red)](shields.io)`
      break;

    default:
      break;
  }

}


function generateMarkdown(data) {
  return `
${generateBadge(data.status)}
# ${data.title}
${data.description}

## Table of Contents

[Installing](#Installing)  
[Usage](#Usage)  
[Testing](#Testing)  
[License](#License)  
[Contributors](#Contributors)  
[Questions](#Questions)  

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
