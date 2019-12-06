const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super(name, ID, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
}

// need a loop to map Engineer to HTML



module.exports = Engineer;