//invokes inquirer
const inquirer = require('inquirer');
const ShapeFile = require('./lib/shapes.js');
const RenderSVGFile = require('./lib/rendersvg.js')
//fs is for 'file system'
const fs = require('fs');


//this is an array of questions set up based on inquirer docs
const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Choose three letters to add to your SVG logo'
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'Choose a text color, you can enter a color keyword or a hexadecimal value'
    },
    {
        type: 'checkbox',
        name: 'shapes',
        message: 'Which shape would you like your logo to be?',
        choices: [{
            name: 'Circle'
        },
        {
            name: 'Triangle'
        },
        {
            name: 'Square'
        }]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a color for the shape, you can enter a color keyword or a hexadecimal value'
    },
];

//writeToFile() doing exactly what it sounds to!
function writeToFile() {
    //this makes it so that when you type node index.js into the terminal the questions prompt the user
    return inquirer.prompt(questions)
    .then(({logoName, txtColor, shapes, shapeColor}) => {
        console.log(questions)
        //this is creating a new svg file and is grabbing the user's input to fill in the empty space
        fs.writeFile("./examples/logo.svg", `
${RenderSVGFile} ${ShapeFile}
        `,
        //this is creating a catch incase things go wrong while using this application- shouldn't happen though lol
        (err) =>
          err ? console.log(err) : console.log('Your SVG file was created!')
        );
      });
};

//this calls the above function
writeToFile();