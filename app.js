
const CarStorage = require('./src/car/CarStorage'); 
const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');
const readline = require('readline-sync');

const i = require('./src/lib/i');


function runApp() {
  function displayOptions() {
    console.log('Press "1" to add a car');
    console.log('Press "2" to remove a car');
    console.log('Press "3" to list all of the cars');
    console.log('Press "exit" to quit to program');
  }
  const car = new Car({brand: 'mercedes', type: 'benz', year: 1995});
  const car2 = new Car({type: 'lancer', brand: 'mitshubishi', year: 2002});
  const car3 = new Car({type: 'x6', brand: 'bmw', year: 2000});
  const car4 = new Car({type: 'x4', brand: 'bmw', year: 2005});
  const racingCar = new RacingCar({category: 'k1', brand: 'subaru', type: 'impreza', year: 2010});
                      
  const cars = [car, car2, racingCar, car3, car4];
  const carStorage = new CarStorage([...cars]);

  // copying by reference - Objects, Arrays
  // copying by value - string, boolean, numbers ....

  // cars.forEach(function(car) {
  //   carStorage.addCar(car);
  // })

  let appIsRunning = true;
  displayOptions();

  while(appIsRunning) {
    let userInput = readline.question('Write me something: ').toLowerCase();

    switch(userInput) {
      case '1': 
        console.log('Creating car');
        break;
      case '2':
        console.log('removing car car');
        break;
      case '3':
        carStorage.listCars();
        break;
      case 'exit':
        console.log('Good Bye!');
        appIsRunning = false;
        break;
      default:
        console.log('Invalid Option!');
    }
  }
}

runApp();

