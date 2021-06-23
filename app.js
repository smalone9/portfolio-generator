const inquirer = require('inquirer');
// questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
// console.log(inquirer);
// const fs = require('fs');

// // modularize generatePage function
// const generatePage = require('./src/page-template.js');

// // Inquirer refactor
// const pageHTML = generatePage(name, github);

// // fs function
// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

// // create and call function
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//   // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };
  
//   printProfileData(profileDataArgs);