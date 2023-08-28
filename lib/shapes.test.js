//imports shape classes form shapes.js file
const {Circle, Triangle, Square} = require('./shapes.js');

/* Created to render undefined color since my shapeColor in shapes.js is "separate" in a way- from the render function and intakes user input.

For all 3 shape tests I named const variables in a way that at first glance you know what their purpose is.

Put fill as undefined because without user input it will populate that way. */

describe("Circle", () => {
    it("should render svg for an undefined fill/shapeColor", () => {
      const expectedSvg = '<circle cx="100" cy="100" r="85" fill="undefined"/>';
      const circle = new Circle();
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () => {
    it("should render svg for an undefined fill/shapeColor", () => {
      const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="undefined"/>';
      const triangle = new Triangle();
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Square", () => {
    it("should render svg for an undefined fill/shapeColor", () => {
      const expectedSvg = '<rect width="200" height="200" fill="undefined"/>';
      const square = new Square();
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});
