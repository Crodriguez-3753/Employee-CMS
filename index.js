const questions = require("./utils/questions");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const 

conat
async function main(){
    
    // htmlCardArray = [];

    // generate manager
        // ask questions 
        // render new manger based on object props 
        // push to htmlCardArray
        // to mainMeu
    
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

    function buildHtmlString(htmlCardArray) {
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link 
                rel="stylesheet" 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                crossorigin="anonymous"
            />
        
            <link rel="stylesheet" href="dist/style.css">
            <title> Employee CMS</title>
            <style></style>
          </head>
          <body class="h-100">
            <nav class="h-25 color-white p-4" style="background: rgb (0, 0, 255, 0.5)">
                <a href="#here"> <div class="btn btn-dark rounded-0">Go here!</div></a>
            </nav>
            <main class="container tect-center h-50 p-5">
        ` + htmlCardArray.join("")
    }




}

// Start 🚀
main();