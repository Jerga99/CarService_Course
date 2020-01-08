


class CarStorage {
  cars = [];

  constructor(cars) {
    this.cars = cars || []; 
  }

  addCar(car) {
    this.cars.push(car);
  }

  removeCar() {

  }

  listCars() {
    if (this.cars.length === 0) {
      console.log('No cars in the list!');
      return;
    }

    // TODO: arrow function
    this.cars.forEach(function(car) {
      car.displayInfo();
    })
  }

}

module.exports = CarStorage;