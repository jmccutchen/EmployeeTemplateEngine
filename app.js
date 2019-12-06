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
                type: "input",
                name: "managerName",
                message: "Enter Manager Name"
            },
            {
                type: "input",
                name: "managerID",
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
                name: "managerEmail",
                message: "What is manager's email address"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is manager's office number?"
            }
        ])
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
            teamArray.push(manager);
            IDArray.push(answers.managerID);
            makeTeam()

        });

};

// question to continue or not
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
            if (answers.makeTeam) {
                promptUser();
            } else {
                return;
            }
        })
};

// questions to create employee
function promptUser() {
    return inquirer

        .prompt([
            {
                type: "list",
                name: "role",
                message: "What employee role to enter?",
                choices: ["Engineer", "Intern"]
            }
        ])
        .then((answers) => {
            if (answers.role === "Engineer") {
                promptEngineer()

            } else {
                promptIntern()
            }
        });
}

// questions to create engineer
function promptEngineer() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Employee name"
            },
            {
                type: "input",
                name: "engineerID",
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
                name: "engineerEmail",
                message: "What is the email address?"
            },
            {
                type: "input",
                name: "github",
                message: "GitHub username?"
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.github);
            teamArray.push(engineer);
            IDArray.push(answers.engineerID);
            makeTeam();
            console.log(teamArray)
            
        })

}


// questions to create Intern
function promptIntern() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "Employee name"
            },
            {
                type: "input",
                name: "internID",
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
                name: "internEmail",
                message: "What is the email address?"
            },
            {
                type: "input",
                name: "school",
                message: "Name of school?"
            }
        ])
        .then(answers => {
            
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school);
            teamArray.push(intern);
            IDArray.push(answers.internID);
            makeTeam();
            console.log(teamArray)
            console.log(IDArray)
        })

}


promptManager()

module.exports = IDArray, teamArray




