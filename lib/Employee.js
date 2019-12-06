

class Employee {
    
    constructor (name, ID, email){
        this.name = name
        this.id = ID
        this.email = email
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getRole(){
        return "Employee";
    }
    getEmail(){
        return this.email;
    }
    
}




module.exports = Employee;