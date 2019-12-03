const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js")
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js")
const Employee = require("./lib/Employee.js")

// questions for user

function promptUser() {
    return inquirer

        .prompt([
            {
                type: "input",
                name: "name",
                message: "Employee name"
            },            
            {
                type: "list",
                name: "role",
                message: "What job type to enter?",
                choices: ["Engineer", "Intern", "Manager"]
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address for this employee?"
            }
        ])
        .then(answers => {
            
            if (answers.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "GitHub username?"
                    }
                ])
            } else if (answers.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "Name of school?"
                    }
                ])
            } else if (answers.role === "Manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "officeNumber",
                        message: "Office number?"
                    }
                ])
            }
            
        })
        
}

promptUser()

module.exports = promptUser
 



