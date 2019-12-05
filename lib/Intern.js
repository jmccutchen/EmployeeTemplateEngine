const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, ID, role, email, school) {
        super(name, ID, role, email);
        this.school = school
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;