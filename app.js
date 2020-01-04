

function runApp() {
  // object
  const car = {
      brand: 'mercedes',
      type: 'benz',
      produceYear: 1995,
      displayInfo: function() {
        console.log(`${this.brand} ${this.type} - ${this.produceYear}`);
      }
  }

  const car2 = {
      brand: 'mitshubishi',
      type: 'lancer',
      produceYear: 2002 
  }

  // displayCarInfo
  // params: brand, type, year
  function displayCarInfo(car) {
      console.log(`${car.brand} ${car.type} - ${car.produceYear}`);
  }

  displayCarInfo(car);
  displayCarInfo(car2);
}

runApp();

