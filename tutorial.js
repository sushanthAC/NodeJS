const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObject {
  constructor() {
    console.log('class object created');
  }
}
module.exports = { sum: sum, PI: PI, SomeMathObject: SomeMathObject };