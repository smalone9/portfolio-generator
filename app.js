// array
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// // use the array index to extract arg
// const name = profileDataArgs[0];
// const Github = profileDataArgs[1];

// assignment destructuring
const [name, github] = profileDataArgs

// html setup
const generatePage = (name, github) => {
  return `
  <!DOCTYPE html>
  <html lang=en>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content=:"width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><ahref="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};
console.log(name, github);
console.log(generatePage(name, github));

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