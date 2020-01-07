
const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');

Object.prototype.displayInfo = function() {
  console.log('DISPLAYING OBJECT INFO!!!!!!');
}

function runApp() {
  const car = new Car({brand: 'mercedes', type: 'benz', year: 1995});
  const car2 = new Car({type: 'lancer', brand: 'mitshubishi', year: 2002});

  const racingCar = new RacingCar({category: 'k1', brand: 'subaru', type: 'impreza', year: 2010});

  racingCar.displayInfo();
  car.displayInfo();
                          
  const cars = [car, car2, racingCar];
}

runApp();

