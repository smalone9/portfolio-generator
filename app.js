const fs = require('fs');

// modularize generatePage function
const generatePage = require('./src/page-template.js');

// array
const profileDataArgs = process.argv.slice(2);


// // use the array index to extract arg
// const name = profileDataArgs[0];
// const Github = profileDataArgs[1];

// assignment destructuring
const [name, github] = profileDataArgs

// fs function
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

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