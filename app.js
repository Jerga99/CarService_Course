
const Car = require('./Car');

function runApp() {
  const car = new Car('mitshubishi', 'benz', 1995);
  const car2 = new Car('mitshubishi', 'lancer', 2002);

  // if (car.brand === car2.brand) {
  //   car.displayInfo();
  //   car2.displayInfo();
  // }

  const someCondition = false;

  if (!someCondition) {
    console.log('Executing if block')
  } else {
    console.log('Executing else block')
  }


  // == : equal to
  // === : equal to (strict)
  // != : not equal to
  // !== : not equal to(strict)
  // > : greater than
  // < : less to
  // >= : greater than or equal to
  // >= : less than or equal to

  // if (0 > 10) {
  //   console.log('Hello World')
  // } else if(2 > 10) {
  //   console.log('Executing else if statement')
  // } else {
  //   console.log('Executing else statement')
  // }

}

runApp();

