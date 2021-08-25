
const fs = require('fs');
const path = require('path');
const {prompt: promptUser} = require('inquirer');
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const questions = require("./utils/questions.js");

const htmlTeamArray = []

async function init () {
    
    // generate manager
        // ask questions 
        const managerAnswers = await promptUser(questions.managerQuestions)
        console.log(managerAnswers);
        const managerObj = new Manager(...Object.values(managerAnswers))
        // render new manger based on object props 
        const cardString = renderEmployee(managerObj)
        // push to htmlCardArray
        htmlTeamArray.push(cardString)
        // to mainMeu
        mainMenu()
}
    // generate Engineer
        // ask questions 
        // render new manger based on object props 
        // push to htmlCardArray
    
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