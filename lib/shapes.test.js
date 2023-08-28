//todo add Jest tests for shapes
const {Circle, Triangle, Square} = require('./shapes.js');
//const indexFile = require('../index.js')

const shapeOne = new Circle();
expect(shapeOne.render(`<circle cx="100" cy="100" r="85" fill="blue"/>`)).toEqual(`<circle cx="100" cy="100" r="85" fill="blue"/>`);

// const shapeTwo = new Triangle();
// shapeTwo.shapeColor("blue");
// expect(shapeTwo.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');

// const shapeThree = new Square();
// shapeThree.shapeColor("blue");
// expect(shapeThree.render()).toEqual('<rect width="200" height="200" fill="blue"/>');
