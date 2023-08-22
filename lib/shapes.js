//todo add triangle, circle and square svg classes/constructors and 
//import to index.js - require shapes.js in index.js
//todo add svg styling stuff in backticks with ${} ??
class Shapes {
constructor () {
    this.shapeColor = shapeColor //does this need to be empty like '' for user input?
}
setShapeColor(shapeColor) {
    this.shapeColor = shapeColor
}

}
    //todo add a constructor that adds in the colors and stuff via index.js?
    //with shapes and shapeColor 

    //todo another function here that will 'render' the shapes based on user input?? if user === circle || triangle || square
    // <svg width="300" height="200"> do i need a viewbox here? whats a viewbox lol
    // <circle cx="100" cy="100" r="50" fill=" `${this.shapeColor}` "/>
    // <rect width="100" height="100" fill=" `${this.shapeColor}` "/>
    // <polygon points="150, 18 244, 182 56, 182" `${this.shapeColor}` "/> 
    // </svg>


class Circle extends Shapes {
    render(){
        return `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}"/>`
        // return '<circle cx="100" cy="100" r="50" fill="' + this.shapeColor + '"/>'
    }
}

class Triangle extends Shapes {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
        // return '<circle cx="100" cy="100" r="50" fill="' + this.shapeColor + '"/>'
    }
}

class Square extends Shapes {
    render(){
        return `<rect width="100" height="100" fill=" ${this.shapeColor}"/>`
        // return '<circle cx="100" cy="100" r="50" fill="' + this.shapeColor + '"/>'
    }
}

module.exports = {Circle, Triangle, Square}