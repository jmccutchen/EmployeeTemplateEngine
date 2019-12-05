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



class Employee {
    
    constructor (name, ID, role, email){
        this.name = name
        this.id = ID
        this.role = role
        this.email = email
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getRole(){
        return this.role;
    }
    getEmail(){
        return this.email;
    }
    
}




module.exports = Employee;