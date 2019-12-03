// The first class is an Employee parent class with the following properties and
// methods:

// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// The other three classes will extend Employee.

let nextID = 0;

class Employee {
    
    constructor (name, role, email){
        this.name = name
        this.id = nextID++;
        this.role = role
        this.email = email
    }
    getName(){
        return this.name
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.role
    }

}



module.exports = Employee;