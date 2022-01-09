// TODO: Include packages needed for this application

const inquirer = require('inquirer');
// const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const teamArray =[];
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');
// const writeFile = require('./src/generate-site');
  
// TODO: Create an array of questions for user input
// generates answers for Employee
const addEmployee = () => {

  // uses inquire to prompt user for a series of Employee questions, and the answers will be returned
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
    teamArray.push(intern);
    // console.log(intern);
    console.log(teamArray);
    addTeamMember(teamArray);
    })
};

const addManager = (employee) => {
  console.log(employee);

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
    
    teamArray.push(manager);
    console.log(teamArray);
    addTeamMember(teamArray);
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
    teamArray.push(engineer);
    console.log(teamArray);
    addTeamMember(teamArray);
    })
};

const addTeamMember = (teamArray) => {

  inquirer.prompt([
    {
      type: 'confirm',
      name: 'continue',
      message: 'Would you like to add another team member?'
      },
  ])
  .then( answers => {
    if ( answers.continue ) {
      addEmployee();
    } else {
      console.log(teamArray);
      return teamArray;
      }
  })

  .then(teamArray => {
    return generatePage(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
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