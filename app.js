
const Car = require('./src/car/Car');
const RacingCar = require('./src/car/RacingCar');
const readline = require('readline-sync');

const i = require('./src/lib/i');


function runApp() {
  const car = new Car({brand: 'mercedes', type: 'benz', year: 1995});
  const car2 = new Car({type: 'lancer', brand: 'mitshubishi', year: 2002});
  const car3 = new Car({type: 'x6', brand: 'bmw', year: 2000});
  const car4 = new Car({type: 'x4', brand: 'bmw', year: 2005});
  const racingCar = new RacingCar({category: 'k1', brand: 'subaru', type: 'impreza', year: 2010});
                        
  const cars = [car, car2, racingCar, car3, car4];

  let appIsRunning = true;
  while(appIsRunning) {
    let userInput = readline.question('Write me something: ');
    console.log(userInput);

    if (userInput.toLowerCase() === 'exit') {
      console.log('Good Bye!');
      appIsRunning = false;
    }
  }
}

runApp();

