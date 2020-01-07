
const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');

function runApp() {
  const car = new Car('mercedes', 'benz', 1995);
  const car2 = new Car('mitshubishi', 'lancer', 2002);

  const racingCar = new RacingCar('subaru', 'impreza', 2010, 'k1');

  racingCar.displayInfo();
                          
  const cars = [car, car2, racingCar];

}

runApp();

