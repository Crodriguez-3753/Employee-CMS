module.exports = {
    managerQuestions: [
        {
            message: "what is your name",
            name: "name",
        },
        {
            message: "what is your id",
            name: "id",
        },
        {
            message: "what is your email",
            name: "email",
        },
    ],

    engineerQuestions: [
        {
          message: "What is your name?",
          name: "name"
        },
        {
          message: "What is your id?",
          name: "id"
        },
        {
          message: "What is your email?",
          name: "email",
        },
        {
          message: "What is your Github username?",
          name: "github",
        }
      ],
    
    internQuestions: [
        {
            message: "what is your name",
            name: "name",
        },
        {
            message: "what is your id",
            name: "id",
        },
        {
            message: "what is your email",
            name: "email",
        },
    ],
    
    mainMenuQuestions: [
        {
          message: "What would you like to do next?",
          name: "mainMenu", 
          type: "list", 
          choices: [
            "Add another Engineer", 
            "Add an Intern", 
            "Bye"
         ]
        },
    ]
}

