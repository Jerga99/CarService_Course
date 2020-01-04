
const Car = require('./Car');

function runApp() {
  const car = new Car('mercedes', 'benz', 1995);
  const car2 = new Car('mitshubishi', 'lancer', 2002);

  car.displayInfo();
  car2.displayInfo();
}

runApp();

