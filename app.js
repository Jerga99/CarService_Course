
const Car = require('./Car');

function runApp() {
  const car = new Car('mercedes', 'benz', 1995);
  const car2 = new Car('mitshubishi', 'lancer', 2002);
                          
  // const carBrands = ['mitshubishi', 'mercedes'];

  // console.log(carBrands[0]);
  // console.log(carBrands[1]);

  // carBrands.push('audi');
  // carBrands.push('skoda');

  // console.log(carBrands);

  // carBrands.splice(2, 2);

  // console.log(carBrands);

  const cars = [car, car2];

  cars[0].displayInfo();
  cars[1].displayInfo();


  for(let i = 0; i < 10; i++) {
    console.log(i);
  }


}

runApp();

