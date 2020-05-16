const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "list",
        name: "status",
        message: "What is the status of your project?",
        choices: ["Complete", "In Progress", "Not Working"]
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of the project."
    },
    {
        type: "input",
        name: "install",
        message: "Enter the install instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "what is the usage?"
    },
    {
        type: "input",
        name: "licence",
        message: "What is the licence?"
    },
    {
        type: "input",
        name: "contributors",
        message: "List the contributors."
    },
    {
        type: "input",
        name: "test",
        message: "What are the tests?"
    },
    {
        type: "input",
        name: "questions",
        message: "Questions?"
    },

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
}

init();
