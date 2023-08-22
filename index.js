//invokes inquirer
const inquirer = require('inquirer');
const {Shapes, Circle, Triangle, Square} = require('./lib/shapes.js');
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

//writeToFile() is self-explanatory
function writeToFile() {
    //this makes it so that when you type node index.js into the terminal the questions prompt the user
    return inquirer.prompt(questions)
    .then(({logoName, txtColor, shapes, shapeColor}) => { //Shapes, RenderSVGFile
        console.log(questions)

        // const newShape = new Shapes (
        //     this.shapes,
        //     this.shapeColor
        // );
        // const newRender = new RenderSVGFile (
        //     this.txtColor,
        //     this.logoName
        //
        // ); OR WOULD I DO IT LIKE THIS
        // const circle = new Circle(shapeColor, shapes)
        //      circle.render()

        //this is creating a new svg file and is grabbing the user's input to fill in the empty space
        fs.writeFile("./examples/logo.svg", `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapes} fill="${shapeColor}"/><text x="100" y="115" font-size="60" text-anchor="middle" fill="${txtColor}">${logoName}</text></svg>
        `,
        //this is creating a catch incase things go wrong
        (err) =>
          err ? console.log(err) : console.log('Your SVG file was created!')
        );
      });
};


//this calls the above function
writeToFile();