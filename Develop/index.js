var fs = require("fs");
var inquirer = require("inquirer");


// array of questions for user
// const questions = [

// ];

function init() {

    inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail address?',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'describe',
      message: 'Please write a short description of your project.',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should  be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to tests?.',
    },
    {
        type: 'input',
        name: 'utilization',
        message: 'What does the user need to know about using this repo?.',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
      },

    

    // here is where you will build the markdown file
]).then((answers) => {

    const markdownString = ` # Inquirer_README-Generator


    ## Table of Contents
    
    1. [About Project](#About-the-Project)
    2. [Getting Started](#Getting-Started)
    3. [Usage](#Usage)
    4. [Contributing](#Contributing)
    5. [License](#License)
    
    
    ## About the Project  
    
    
    Project Name: ${answers.projectName}
    
    ${answers.describe}
    
    ${answers.github}
    
    ## Getting Started
    
    ${answers.utilization}
    
    ## Usage
    
    To install dependencies use the ${answers.dependencies} command.
    
    To run tests use the ${answers.tests}
    
    
    ## Contributing
    
    ${answers.contribute}
    
    Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
    
    Please make sure to update tests as appropriate.
    
    ## License
    
    [MIT](https://choosealicense.com/licenses/mit/)
    
    ## Contact Me
    
    ${answers.email} `;

     writeToFile ("README.md", markdownString);

})
};


// function to write README file

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if(err) console.log(err)
      })
};

// function to initialize program
// function init() {
// };

// function call to initialize program
init();


// promptUser();