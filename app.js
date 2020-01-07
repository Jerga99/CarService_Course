
const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');

const i = require('./src/lib/i');

Object.prototype.displayInfo = function() {
  console.log('DISPLAYING OBJECT INFO!!!!!!');
}

Array.prototype.forEach2 = function(callback) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

function runApp() {
  const car = new Car({brand: 'mercedes', type: 'benz', year: 1995});
  const car2 = new Car({type: 'lancer', brand: 'mitshubishi', year: 2002});
  const car3 = new Car({type: 'x6', brand: 'bmw', year: 2000});
  const car4 = new Car({type: 'x4', brand: 'bmw', year: 2005});
  const racingCar = new RacingCar({category: 'k1', brand: 'subaru', type: 'impreza', year: 2010});
                        
  const cars = [car, car2, racingCar, car3, car4];

  // function displayCarInfo(car) {
  //   car.displayInfo();
  // }

  // const carBrands = cars.map(function(car) {
  //   return car.brand;
  // })

  const carBrands = i.map(cars, function(car) {
    return car.brand;
  })

  // console.log(carBrands);

  const filteredCars = i.filter(cars, function(car) {
    return car.brand === 'bmw';
  })

  console.log(filteredCars);

  // const filteredCars = cars.filter(function(car) {
  //   return car.brand === 'bmw';
  // })

  // i.forEach(cars, function(car) {
  //   car.displayInfo();
  // })

  // cars.forEach2(function(car) {
  //   car.displayInfo();
  // })
}

runApp();

