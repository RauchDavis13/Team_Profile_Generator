// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname,'dist');
console.log(DIST_DIR);
const distPath = path.join(DIST_DIR, 'team.html');
const generateTeam = require('./src/page-template');

const teamArray = [];
// const { writeFile, copyFile } = require('./src/generate-site');
  
// TODO: Create an array of questions for user input
function initMenu() {
  addManager();
};

const addManager = (employee) => {
  console.log(employee);

  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the Manager's name?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
          return "Please enter the Manager's name!";
      },
    },
    
    {
      type: 'input',
      name: 'managerId',
      message: "What is the Manager's ID?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
          return "Please enter a number greater than zero!";
      },
    },

    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the Manager's email?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
          return "Please enter a valid email address!";
      },
    },

    {
      type: 'input',
      name: 'managerOfficeNum',
      message: "What is the Manager's office number?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
          return "Please enter a number greater than zero!";
      },
    },
  ])
  .then((answers) => {
    
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
    const role = manager.getRole();
    manager.role = role;    
    teamArray.push(manager);
    addTeam();
    });
};


// gives user option to add more team members or finish entries to create html page by calling teamBuild()
function addTeam() {  
 inquirer.prompt ([
   {
    type: 'list',
    name: 'memberChoice',
    message:'Which type of team member would you like to add?',
    choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    },
   
  ])
  .then((userChoice) => {
    switch(userChoice.memberChoice) {
      case 'Engineer':
        addEngineer();
        break;
      case 'Intern':
        addIntern();
        break;
      default:
        teamBuild();
    }
  })
};


function addIntern() {

  // returns intern info
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is the Intern's name?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
          return "Please enter the Intern's name!";
      },
    },
    
    {
      type: 'input',
      name: 'internId',
      message: "What is the Intern's ID?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
          return "Please enter a number greater than zero!";
      },
    },

    {
      type: 'input',
      name: 'internEmail',
      message: "What is the Intern's email?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
          return "Please enter a valid email address!";
      },
    },

    { 
        type: 'input',
        name: 'internSchool',
        message: 'What school did the Intern go to?',
        validate: school => {
          if (school) {
            return true;
          } else {
            console.log('Please enter the school the Intern went to!');
            return false;
          }
        }
    },
  ])
  .then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
    const role = intern.getRole();
    intern.role = role;
    teamArray.push(intern);
    addTeam();
    })
};


function addEngineer() {
 
  // returns 'cell phone' for manager
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: "What is the Engineer's name?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
          return "Please enter the Engineer's name!";
      },
    },
    
    {
      type: 'input',
      name: 'engineerId',
      message: "What is the Engineer's ID?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
          return "Please enter a number greater than zero!";
      },
    },

    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is the Engineer's email?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
          return "Please enter a valid email address!";
      },
    },
    { 
        type: 'input',
        name: 'engineerGitHub',
        message: "Please enter the Engineer's GitHub username.",
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
            return "Please enter the Engineer's GitHub username!";
        },
    },
  ])
  .then(answers => {
    
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub)
    const role = engineer.getRole();
    engineer.role = role;
    teamArray.push(engineer);
    addTeam();
  })
};


// create a function to create the output directory
function teamBuild() {
 
  
  if (!fs.existsSync(DIST_DIR)) {
   fs.mkdirSync(DIST_DIR);
  }

  console.log(teamArray);
  generateTeam(teamArray);

  fs.writeFileSync(distPath, JSON.stringify(teamArray));
 
  
};

initMenu();