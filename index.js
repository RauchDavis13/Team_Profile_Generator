const inquirer = require('inquirer');
// const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
let employeeArray =[];

// TODO: Include packages needed for this application
const page_template = require('./src/page-template');
const writeFile = require('./src/generate-site');
  
// TODO: Create an array of questions for user input
// generates answers for Employee
const addEmployee = () => {

  //const employee = new Employee;
  // uses inquire to prompt user for a series of questions, and the answers will be returned
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message:'Which role will this team member have?',
      choices: ["Manager", "Engineer", "Intern"],
      },

    {
      type: 'input',
      name: 'name',
      message: "What is the name of the employee?",
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log("Please enter the employee's name!");
          return false;
        }
      }
    },
    
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("Please enter the employee's ID!");
          return false;
        }
      }    
    },

    {
      type: 'input',
      name: 'email',
      message: "Please enter the employee's email.",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter the employee's email.");
          return false;
        }
      }
    }   
  ])
  .then(answers => {
    const employee = {
      name: answers.name,
      id: answers.id,
      email: answers.email,
      role: answers.role
    }

    // employeeArray.push(employee);
    // console.log(employee);
    // addTeamMember();
    if (answers.role === "Manager") {

      addManager(employee);
    }
    else if (answers.role === "Engineer") {
        addEngineer(employee);
      }
    
    else if (answers.role === "Intern") {

      addIntern(employee);
    }
  })
};    

const addIntern = (employee) => {

  // returns 'school' for intern
  return inquirer.prompt([

    { 
        type: 'input',
        name: 'school',
        message: 'What school did the intern go to?',
        validate: school => {
          if (school) {
            return true;
          } else {
            console.log('Please enter the school the intern went to!');
            return false;
          }
        }
    },
  ])
  .then(answers => {
    const intern = new Intern(employee.name, employee.id, employee.email, employee.role, answers.school)
    employeeArray.push(intern);
    // console.log(intern);
    console.log(employeeArray);
    // addTeamMember();
    })
};

const addManager = (employee) => {
  console.log(employee);

  const manager = new Manager;
 

  return inquirer.prompt([
    { 
        type: 'input',
        name: 'officeNum',
        message: "Please enter the manager's office phone number.",
        validate: officeNum => {
          if (officeNum) {
            return true;
          } else {
            console.log("Please enter the manager's office phone number!");
            return false;
          }
        }
    },
  ])
  .then(answers => {
    
    const manager = new Manager(employee.name, employee.id, employee.email, employee.role, answers.officeNum)
    
    employeeArray.push(manager);
    console.log(employeeArray);
    // addTeamMember();
    })
};

const addEngineer = (employee) => {
  console.log(employee);

  // returns 'cell phone' for manager
  return inquirer.prompt([
    { 
        type: 'input',
        name: 'gitHub',
        message: "Please enter the engineer's GitHub username.",
        validate: gitHub => {
          if (gitHub) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username!");
            return false;
          }
        }
    },
  ])
  .then(answers => {
    const engineer = new Engineer(employee.name, employee.id, employee.email, employee.role, answers.gitHub)
    employeeArray.push(engineer);
    console.log(employeeArray);
    // addTeamMember();
    })
};



// TODO: Create a function to initialize app
function init() {
  message = "Hello and welcome to Team Profile Generator!Please answer the following quesitons for your Team Profile Generator file to be made.";
  console.log(message);
  message2 = "Please answer the following quesitons for your Team Profile Generator file to be made.";
  console.log(message2);
  addEmployee();
};

init();

// old code, but use to connect to html builder
// addEmployee data passed to page_template.js
// addEmployee()
// .then(answerData => {
//   // console.log('The following data has been entered for your Team Profile');
//   console.log(answerData);
//   // writeFile(page_template(answerData));
// })