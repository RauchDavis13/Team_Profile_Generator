# Team Profile Generator

## Bootcamp: Challenge 10 - Create CLI app to generate HTML based Team Profile

The purpose of this assignment, is to create a working app for a user to populate a template to build an HTML based Team Profile file through a series of questions asked.

- Motivation: Test what has been learned through practical application and testing of Javascript, CLI, OOP, TDD, Node and Node modules including "inquirer", related to the construct of this assignment

- Project: Create an app to create a Team Portfolion html file.  The file will be filled with answers from user promtps to initially ask for the team manager info, and then options to add an ulimited amount of team Engineers and/or Inters.  Upon selecting no further team members, and html page will be generated showing the team members.

- Problem Solved: User is prompted to answer a series of questions from the command prompt and a Team Profie html file is generated.  In addition, a video is supplied from the author that walks a user through the process of using this app.

- Lessons Learned: Currently, the most difficult assignment to date.  Balancing for time, this project is being entered incomplete as I can't find a way to fix the correction for the data coming into the page-template being undefined.  The remaining code has been setup to generate an HTML page based on team manager and additional team members, in a card format from Boot Strap.  Discouraging since the previous assignment entered was scored very well.  Testing with Jest has been completed and works correctly.

## Folders and Files

- README.md:  Explains usage and functionality of this app

- /__tests__: Employee.test, Engineer.test., Intern.test and Mananger.test all work to correctly test the functions in the related files in the /lib folder

- /lib: Contains the files for Employee, Engineer, Inter and Manager, where data is passed in from index.js using inquirer based questions
 
- /dist: Folder where created HTML and CSS files reside

- gitignore: Contains files names that are not passed to Github for usage with the app

- package-lock.json: Package of Node modules, including "inquirer"

- package.json:  Node module file

- index.js: This is where the app begins.  It brings in the "inquirer" node to facilitate a question / answer array by using "require, as well as "require"ing the path of the generateMarkdown.js file.  The "answers" or teamArray, is console logged for the viewer to see the data they supplied and then sent to the page-template.js file  and also writeFile is used to create the HTML page.

- page-template.js: Located in the /lib folder, the file is setup to create team member cards through Bootstrap, then returned as the HTML structure for the page.

- generate-site.js: Located in the /lib folder, this file takes the writeFile(generatePage) info and writes the README.md file.  Upon completion, there is a command line message indicating a successful completion

- /images: Holds images used for examples shown in this file's README.md

## Acceptance Criteria


- WHEN I am prompted for my team members and their information / 
THEN an HTML file is generated that displays a nicely formatted team roster: This has not successfully been done, as the data feeding to the page-template.js file is not being recongnized.

- WHEN I click on an email address in the HTML / THEN my default email program opens and populates the TO field of the email with the address:  Due to the data not being recognized, this is not working

- WHEN I click on the GitHub username / THEN that GitHub profile opens in a new tab:  Due to the data being recognized, this is not working

- WHEN I start the application / THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number:  Successfully completed.  User is asked for team manager's info, and if additional engineers and/or inters are selected, corresponging information requests are made for each team member

- WHEN I enter the team manager’s name, employee ID, email address, and office number / THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team:  Successfully completed.  Once the team manager's info has been entered, the user has the option of adding an engineer, intern, or ending the entry of new team members.

- WHEN I select the engineer  / THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu:  Successfuly completed.  For every engineer team member added, the info above is requested.  Upon completion, the user is taken back to the menu of entering an engineer, inter on ending adding additional team members.

- WHEN I select the intern option / THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu:  Successfuly completed.  For every intern team member added, the info above is requested.  Upon completion, the user is taken back to the menu of entering an engineer, inter on ending adding additional team members.

- WHEN I decide to finish building my team / THEN I exit the application, and the HTML is generated:  Not working due to the data coming up as undefined in the page-template.js file.


## GitHub repository...
https://github.com/RauchDavis13/Team_Profile_Generator.git

## Video Links (Screencastify)

Video for TESTS
https://watch.screencastify.com/v/G6ZDqonR6GvDHeDg3Fdi

Video for invoking application and usage
https://watch.screencastify.com/v/cHUH4imUTJFQoAOtZf94



## Thank you's
Matthew Kim(Instructor)
Valeria Flores(TA)
Dustin Erwin (TA)
Kris Renaldi (TA)
Sandra Smith (Tutor)

Fellow students...
Robert Evanic
Adam Howard


