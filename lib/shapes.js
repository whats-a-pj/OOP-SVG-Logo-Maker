class Shapes {
constructor (/*shapeColor, shapes*/) {
    this.shapeColor = shapeColor //does this need to be empty like '' for user input?
    // this.shapes = shapes
}
setShapeColor(shapeColor) {
    this.shapeColor = shapeColor
}

}

//todo if statements that will 'render' the actual shapes based on user input?? if shapes === circle || triangle || square {} return

class Circle extends Shapes {
    // constructor(shapeColor, shapes) {
    // super(shapeColor, shapes)
    // }
    render() { //if (this.shapes === "Circle")
        return `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}"/>`
        // return '<circle cx="100" cy="100" r="50" fill="' + this.shapeColor + '"/>'
    }
}

class Triangle extends Shapes {
    // constructor(shapeColor, shapes) {
    //     super(shapeColor, shapes)
    //     }
    render() { //if (this.shapes === "Triangle")
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
        // return '<circle cx="100" cy="100" r="50" fill="' + this.shapeColor + '"/>'
    }
}

class Square extends Shapes {
    // constructor(shapeColor, shapes) {
    //     super(shapeColor, shapes)
    //     }
    render() { //if (shapes === "Square")
        return `<rect width="100" height="100" fill="${this.shapeColor}"/>`
        // return '<circle cx="100" cy="100" r="50" fill="' + this.shapeColor + '"/>'
    }
}

module.exports = {Shapes, Circle, Triangle, Square}