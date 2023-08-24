//todo add Jest tests for shapes
const {Circle, Triangle, Square} = require('./shapes.js');
// const indexFile = require('../index.js')

describe('Circle', () => {
    it('should render a circle', () => {
        const circ = "Circle";
        const newCirc = new Circle();
        expect(newCirc.Circle('Circle')).toEqual(circ);
    })
});

describe('Triangle', () => {
    it('should render a triangle', () => {
        const tri = "Triangle";
        const newTri = new Triangle();
        expect(newTri.Triangle('Triangle')).toEqual(tri);
    })
});

describe('Square', () => {
    it('should render a square', () => {
        const square = "Square";
        const newSquare = new Square();
        expect(newSquare.Square('Square')).toEqual(square);
    })
});