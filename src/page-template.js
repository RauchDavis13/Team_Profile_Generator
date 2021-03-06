

// create the team
const generateTeam = team => {
  console.log(team);

  
  // create the manager html
  const generateManager = manager => {
        
  return `
    <div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${manager.name}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2></i>${manager.role}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNum}</li>
      </ul>
    </div>
  `;
  };
  // create the engineer html
  const generateEngineer = engineer => {
    return `
      <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${engineer.getGitHub()}</li>
        </ul>
      </div>
    `;
    };
    // create the intern html
  const generateIntern = intern => {
    return `
      <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
        </ul>
      </div>
    `;
};

const cardArray = [];
cardArray.push(team.filter(employee => 
  employee.role === "Manager"
  ) 
  .map(manager => 
    generateManager(manager)
    ).join('')
  );

cardArray.push(team.filter(employee => 
  employee.getRole() === "Engineer"
  ) 
  .map(engineer => 
    generateEngineer(engineer)
    ).join('')
  );

cardArray.push(team.filter(employee => 
  employee.getRole() === "Intern"
  ) 
  .map(intern => 
    generateIntern(intern)
    ).join('')
  );

  return cardArray.join('');


};

// export function to generate entire page
generatePage = templateData => {
  // destructure page data by section
  const { team, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        // <nav class="flex-row">
        //   <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
        // </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateTeam(team)}
      
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};

module.exports = generatePage;
