
const Car = require('./Car');

class RacingCar extends Car {
  category = '';

  constructor(brand, type, year, category) {
    super(brand, type, year);
    this.category = category;
  }
  
  racingCarFunction() {
    console.log('racing car function');
  }
  
}

module.exports = RacingCar;