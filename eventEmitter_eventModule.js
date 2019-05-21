const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
  console.log('Tutorial even occured');
});

eventEmitter.on('addition', (num1, num2) => {
  console.log(num1 + num2);
});

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
let sush = new Person('sushanth');
sush.on('name', () => {
  console.log('name is ' + sush._name);
});
eventEmitter.emit('tutorial');
eventEmitter.emit('addition', 1, 2);
sush.emit('name');