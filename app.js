const inquirer = require("inquirer");
const fs = require("fs");

// questions for user

function promptUser() {
    return inquirer

        .prompt([
            {
                type: "list",
                name: "jobtype",
                message: "What job type to enter? Pick one.",
                choices: ["Engineer", "Intern", "Manager"]
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address for this employee?"
            }
        ])
        .then(answers => {
            console.log(answers)
            if (answers.jobtype === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "GitHub username?"
                    }
                ])
            } else if (answers.jobtype === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "Name of school?"
                    }
                ])
            } else if (answers.jobtype === "Manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "officeNum",
                        message: "Office number?"
                    }
                ])
            }
        })
        
}

promptUser()
 



