const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, ID, role, email, officeNumber) {
        super(name, ID, role, email);
        this.officeNumber = officeNumber;
        
    }
    getOffice() {
        return this.officeNumber;
    }
    
}

// need a loop to map Manger to HTML
// Manager.map(manager => {

// `
//     <div class="col-sm-3 col-md-3 p-2">
//         <div class="card rounded-lg shadow">
//             <div class="card-header bg-primary text-white">
//                 <h3 class="justify-content-start">${name}</h3>
//                 <h4 class="row justify-content-start">
//                     <div>
//                         <i class="fas fa-mug-hot pr-2 pl-2"></i>
//                     </div>
//                     <div>Manager</div>
//                 </h4>
//             </div>
//             <div class="card-body bg-light">
//                 <div class="m-2 bg-white border border-secondary">
//                     <div class="border-bottom border-secondary category">ID: ${id}</div>
//                     <div class="border-bottom border-secondary category">Email: ${email}</div>
//                     <div class="border-bottom border-secondary category">Office number: ${officeNumber}</div>
//                 </div>
//             </div>
//         </div>
//     </div>
// `
// });

module.exports = Manager