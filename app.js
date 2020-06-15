var inquirer = require('inquirer');
var fs = require('fs');

const newFile = require('./lib/htmlrender');
const renderer = require('./lib/htmlrender');

  function getUserInput (data) {
  console.log('Please read each question carefully before submitting your response. Enjoy!')
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
      name: 'Phone_Number',
      when: function (answers) {
        return answers.Team_Role === 'Manager'; 
      },
      message: 'What is the Manager\'s phone number?',
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
      name: 'LinkedIn',
      message: 'What is the team member\'s LinkedIn URL?', 
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
      var readMeString = render();
      // var readMeString = 
// `
// <div class="col-md-4">
// <div class="card">
//     <div class="inner">
//         <img class="card-img-top" src="./assets/${answers.Team_Member}.png" alt="No Employee Photo Available">
//         <div class="card-body">
//             <h5 class="team-member">${answers.Team_Member}</h5>
//             <p class="team-role">${answers.Team_Role}</p>
//             <p class="employee-id">Employee ID#: ${answers.Employee_Id}</p>
//             <p class="email">${answers.Email}</p>
//             <div class="row d-flex justify-content-around">
//                 <div class="col">
//                     <a href="${answers.Facebook}">
//                     <i class="bump fa fa-facebook"></i>
//                     </a>
//                 </div>
//                 <div class="col">
//                     <a href="${answers.Twitter}">
//                     <i class="bump fa fa-twitter"></i>
//                     </a>
//                 </div>
//                 <div class="col">
//                     <a href="${answers.LinkedIn}">
//                     <i class="fa fa-linkedin-square"></i>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// `
    fs.appendFile('./testpage.hmtl', readMeString, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

  })
}

module.exports = {
  getUserInput 
}


// First, you need to set up your classes so that they inherit from Employee class.
// Then, you need to export those classes for use in the renderer. 
// Then, you need to use async await to allow your inquirer to run and then your renderer to use the inquirer data.
// Then, you need to check the provided unit tests.