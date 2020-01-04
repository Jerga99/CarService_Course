

function runApp() {
  // object
  const car = {
    brand: 'mercedes',
    type: 'benz',
    produceYear: 1995,
    displayInfo: function() {
      console.log(`${this.brand} ${this.type} - ${this.produceYear}`);
    },
    getThis: function() {
      return this;
    }
  }

  console.log(car === car.getThis());

  const car2 = {
    brand: 'mitshubishi',
    type: 'lancer',
    produceYear: 2002 
  }

  // displayCarInfo
  // params: brand, type, year
  function displayCarInfo(car) {
    console.log(`${car.brand} ${car.type} - ${car.produceYear}`);
    return function() {
      console.log('I AM FUNCTION')
    }
  }

  displayCarInfo(car)();
  const testFunction = displayCarInfo(car2);
  testFunction();
}

runApp();

