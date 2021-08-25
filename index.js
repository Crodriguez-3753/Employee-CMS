const questions = require("./utils/questions.js");
const inquirer = require('inquirer');
const Employee = ('./lib/Employee');
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const {writeFileSync} = require('fs')
const { async } = require("rxjs")
const path = require('path');
const open = require('open');
const { managerQuestions } = require("./utils/questions.js");


const htmlTeamArray = []

async function main () {
    
    // generate manager
        // ask questions 
        const manageAnswers = await inquirer.prompt(questions.managerQuestions)
        // get only answers value
        const manageParameters = Object.values(managerQuestions)

        // create a new manager based on object propeties
        const manager = new Manager(...manageParameters)

        // create employee html string
        const employeeCard = generateEmployeeHtml(manager)
        // push to htmlCardArray
        htmlTeamArray.push(employeeCard)
        // to mainMeu
        mainMenu()
};

//main menu funtion
async function mainMenu(){
    //get use choice 
    const {mainMenu} = await inquirer.prompt(questions.mainMenuQuestions)

    //main switch 
    switch(mainMenu){
        case "Add another Engineer": return promptEngineer();
        case "Add an Intern": return promptIntern();
        case "Bye": return saveTeam();
    }
};

async function promptEngineer() {
    // ask engineer questions
    const engineerAnswers = await inquirer.prompt(questions.engineerQuestions)
    // get only answers values
    const engineerParameters = Object.values(engineerAnswers);

    // create new engineer based on Object properties
    const engineer = new Engineer (engineerAnswers)

    //create employee html string
    const employeeCard = generateEmployeeHtml(engineer)

    //push to htmlTeamArray
    htmlTeamArray.push(employeeCard)
};

async function promptIntern() {
    //ask intern questions
    const internAnswers = await inquirer.prompt(questions.internQuestions)
    
    //get only answers values
    const internParameters = Object.values(internAnswers)
    
    // create new intern based on Object properties
    const intern = new Intern (...internParameters)
    
    // create employee html string
    const employeeCard = generateEmployeeHtml(intern)

    // push to htmlTeamArray
    htmlTeamArray.push(employeeCard)

    // to main menu
    mainMenu()
};
    
    // generate Intern
        // ask questions 
        // render new manger based on object props 
        // push to htmlCardArray
        // back to mainMenu

    // mainMenu func
        // generate Engineer
        // generate Intern
        // bye


    // build htmlString



// Start 🚀
main();