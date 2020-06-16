// TODO: Write code to define and export the Employee class

export class Employee {
    
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
    return this.name;
  }

  getRole() {
    return this.role;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

}