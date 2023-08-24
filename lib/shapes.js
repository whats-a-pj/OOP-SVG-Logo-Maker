class Circle {
    //this attaches the shapeColor from index.js
    constructor (shapeColor) {
        this.shapeColor = shapeColor
    }
    //this creates the svg syntax and adds in the user's choice in color
    render() {
        return `<circle cx="100" cy="100" r="85" fill="${this.shapeColor}"/>`
        // can also be done like this: return '<circle cx="100" cy="100" r="50" fill="' + this.shapeColor + '"/>'
    }
}

class Triangle {
    constructor (shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
}

class Square {
    constructor (shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
        return `<rect width="200" height="200" fill="${this.shapeColor}"/>`
    }
}

//this exports the shape classes to index.js
module.exports = {Circle, Triangle, Square}