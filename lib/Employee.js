// TODO: Write code to define and export the Employee class
const newFile = require('../app.js')
newFile.generateHTML()

class Employee {
    
  constructor(name, id, email) {
    this.name = answers.Team_Member;
    this.id = answers.Employee_Id;
    this.email = answers.Email;
    this.getName();
    this.getId();
    this.getEmail();
    this.getRole();
  }

  getName() {
    console.log(this.name);
  }

  getRole() {
    console.log(this.role);
  }

  getId() {
    console.log(this.id);
  }

  getEmail() {
    console.log(this.email);
  }
} 

// const seller = new Employee()
// seller.getID();

module.exports = {
  Employee
}