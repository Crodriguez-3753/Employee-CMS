const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, github) {
        
        super(id, name, email);
        
        this.github   = github  ;
    }
    
    getRole() {return 'Engineer';}
}

module.exports = Manager;