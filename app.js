var inquirer = require('inquirer');
var fs = require('fs');


function generateHTML(data) {
  console.log('Please read each question carefully before submitting your response. Empty fields require restart of README generator. You may use markdown syntax in your responses and they will be included in the final README.md file. Enjoy!')
  inquirer.prompt([
    {
      type:'input',
      name: 'Team_Member',
      message: 'What is the team member\'s name?', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
      type: 'list',
      name: 'Team_Role',
      choices: ['Manager', 'Intern', 'Engineer']
    },
    {
      type: 'input',
      name: 'School',
      when: function (answers) {
        return answers.Team_Role === 'Intern'; 
      },
      message: 'What University did they attend?',
    },
    { 
      type: 'input',
      name: 'Git',
      when: function (answers) {
        return answers.Team_Role === 'Engineer'; 
      },
      message: 'What is the team member\'s Github Repo URL?',
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'Linkedin',
      when: function (answers) {
        return answers.Team_Role === 'Manager'; 
      },
      message: 'What is the team member\'s LinkedIn URL?',
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
    type:'input',
    name: 'Employee_Id',
    message: 'What is the team member\'s Employee ID Number?', 
    validate: function(text) {
      if (text === "") {
        return 'Field must not be empty.'
      }
      return true;
      }
    },
    {
      type:'input',
      name: 'Email',
      message: 'What is the team member\'s E-Mail Address?', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
      type:'input',
      name: 'Phone',
      message: 'What is the team member\'s Phone Number?', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
      type:'input',
      name: 'Facebook',
      message: 'What is the team member\'s Facebook URL?', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
      type:'input',
      name: 'Twitter',
      message: 'What is the team member\'s Twitter URL?', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;
      }
    },
    {
      type:'input',
      name: 'Github',
      message: 'What is the team member\'s Github Repo?', 
      validate: function(text) {
        if (text === "") {
          return 'Field must not be empty.'
        }
        return true;  
      }
    }
  ])
  .then(function(answers)  {
      console.log('Here are your answers: ', answers); 
    


      var readMeString = 
`
<div class="col-md-4">
<div class="card">
    <div class="inner">
        <img class="card-img-top" src="./assets/${answers.Team_Member}.png" alt="No Employee Photo Available">
        <div class="card-body">
            <h5 class="team-member">${answers.Team_Member}</h5>
            <p class="team-role">${answers.Team_Role}</p>
            <p class="employee-id">Employee ID#: ${answers.Employee_Id}</p>
            <p class="email">${answers.Email}</p>
            <p class="email">${answers.Phone}</p>
            <div class="row d-flex justify-content-around">
                <div class="col">
                    <a href="${answers.Facebook}">
                    <i class="bump fa fa-facebook"></i>
                    </a>
                </div>
                <div class="col">
                    <a href="${answers.Twitter}">
                    <i class="bump fa fa-twitter"></i>
                    </a>
                </div>
                <div class="col">
                    <a href="${answers.Github}">
                    <i class="bump fa fa-github-square"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`
  class Employee {
    
    constructor(name) {
      this.name = answers.Team_Member;
      this.Employee_Id = answers.Employee_Id;
      this.Email = answers.Email;
      this.phone = answers.Phone;
    }
  } 
  console.log(Employee.name)

    fs.appendFile('./testpage.hmtl', readMeString, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

  })
}



generateHTML()