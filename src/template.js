const generateManager = manager => {
    return`
    <div class= "card employee-card">
    <div class "card-header">
       <h2 class= "card-title>${manager.getName()}</h2>
       <h3 class= "card-title"><i class="fas fa-glasses mr-2"></i>${namager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
          <li class= "list-group-item>ID: ${manager.getID()} </li>
          <li class= "list-group-item>Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class= "list-group-item>Office Number: ${manager.getOfficeNumber()}" </li>
        </ul> 
       </div>
    </div>
    `;               
}

   const gererateIntern = intern => {
    return `
    <div class= "card employee-card">
    <div class "card-header">
    <h2 class= "card-title>${intern.getName()}</h2>
    <h3 class= "card-title"><i class="fas fa-glasses mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class= "list-group-item>ID: ${intern.getID()} </li>
            <li class= "list-group-item>Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class= "list-group-item>School: ${intern.getSchool()} </li>
        </ul>
    </div>
    </div>
    `;
}

    const gererateEngineer = engineer => {
        return `
        <div class= "card employee-card">
     <div class "card-header">
        <h2 class= "card-title>${engineer.getName()}</h2>
        <h3 class= "card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
     </div>
     <div class="card-body">
         <ul class="list-group">
           <li class= "list-group-item>ID: ${engineer.getID()} </li>
           <li class= "list-group-item>Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
           <li class= "list-group-item>Github: <a href= https://github.com/${engineer.getGithub()}" target="_blank </li>
         </ul> 
        </div>
     </div>
    `;               
}
