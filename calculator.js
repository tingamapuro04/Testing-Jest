class Calculator {
  constructor(x, y){
    this.x = x
    this.y = y
  }

  addition = (x, y) => {
  return this.x + this.y
  }

  substraction = (x, y) => {
    return this.x- this.y
  }

  divide = (x, y) => {
    return this.x / this.y
  }

  multiply = (x, y) => {
    return this.x * this.y
  }
}


module.exports = Calculator




