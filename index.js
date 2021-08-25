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
const { dirname } = require("path");


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

// save team info
function saveTeam() {
    const htmlString = buildHtmlString(htmlTeamArray)
    saveFile(htmlString)
};

function saveFile(htmlStr) {
    writeFileSync(path.joint(__dirname, "dist/index.html"), htmlStr)
    open(path.joint(dirname, "dist/index.html"))
}

//build htmlString
function generateEmployeeHtml(manager) {
    return`
    <div>
    <div>name:${manager.id}</div>
    <div>id:${manager.name}</div>
    <div>email:${manager.email}</div>
    <div>office:${manager.officeNumber}</div>
    <div>role:${manager.getRole()}</div>
    </div>
    `
}

function generateEmployeeHtml(engineer) {
    return `
    <div>
    <div>name:${engineer.id}</div>
    <div>id:${engineer.name}</div>
    <div>email:${engineer.email}</div>
    <div>github:${engineer.github}</div>
    <div>role:${engineer.getRole()}</div>
    </div>
    `
}

function generateEmployeeHtml(intern) {
    return `
    <div>
    <div>name:${intern.id}</div>
    <div>id:${intern.name}</div>
    <div>email:${intern.email}</div>
    <div>github:${intern.school}</div>
    <div>role:${intern.getRole()}</div>
    </div>
    `
}

   



// Start 🚀
main();