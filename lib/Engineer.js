const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, role, email, github) {
        super(name, role, email);
        this.github = github
    }
    getGithub() {
        return this.github;
    }
}

// need a loop to map Engineer to HTML



module.exports = Engineer;