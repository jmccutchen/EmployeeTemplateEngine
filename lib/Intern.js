const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, role, email, school) {
        super(name, role, email);
        this.school = school
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;