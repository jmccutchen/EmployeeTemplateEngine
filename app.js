// building team ask for manager name, ask to add intern, or engineer in a multiple choice, ask for ID number,look at last project for week 10, 

const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const path = require("path");
// const render = require("render")
const outputPath = path.resolve(__dirname, "output", "team.html");

IDArray = [];
teamArray = [];

// manager prompts
function promptManager() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Select manager",
                choices: ["Manager"]
            },
            {
                type: "input",
                name: "name",
                message: "Enter Manager Name"
            },
            {
                type: "input",
                name: "ID",
                message: "Enter ID number",
                validate: answer => {
                    if (IDArray.includes(answer)) {
                        return "This ID has been used.  Enter a different number";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is manager's email address"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is manager's office number?"
            }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.role, answers.ID, answers.email, answers.officeNumber);
            teamArray.push(manager);
            IDArray.push(answers.ID);


            makeTeam()

        });

};

// question to continue
function makeTeam() {
    return inquirer

        .prompt([
            {
                type: "confirm",
                name: "makeTeam",
                message: "Would you like to add a team member?"
            }
        ])
        .then(answers => {
            if (answers.makeTeam){
                promptUser();
            } else {
                return;
            }
        })
}

// questions to create employee
function promptUser() {
    return inquirer

        .prompt([ 
            {
                type: "input",
                name: "name",
                message: "Employee name"
            },
            {
                type: "input",
                name: "ID",
                message: "Enter ID number",
                validate: answer => {
                    if (IDArray.includes(answer)) {
                        return "This ID has been used.  Enter a different number";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "list",
                name: "role",
                message: "What employee role to enter?",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address?"
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
                .then(answers => {
                    const engineer = new Engineer(answers.name, answers.role, answers.ID, answers.email, answers.github);
                    teamArray.push(engineer);
                    IDArray.push(answers.ID);
                    makeTeam();
                })
            } else if (answers.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "Name of school?"
                    }
                ])
                .then(answers => {
                    const intern = new Intern(answers.name, answers.role, answers.ID, answers.email, answers.school);
                    teamArray.push(intern);
                    IDArray.push(answers.ID);
                    makeTeam();
                })
            }
        }) 

}

promptManager()

module.exports = IDArray, teamArray




