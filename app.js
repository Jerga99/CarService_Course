
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

  // for(let i = 0; i < cars.length; i++) {
  //   if (cars[i].brand === 'mitshubishi') {
  //     cars[i].displayInfo();
  //   }
  // }

  // cars.forEach(function(a) {
  //   a.displayInfo();
  // })

  // let i = 0;
  // while(i < 10) {
  //   console.log(i);
  //   i++;
  // }

}

runApp();

