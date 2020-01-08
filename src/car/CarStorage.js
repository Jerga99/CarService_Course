


class CarStorage {
  cars = [];

  constructor(cars) {
    this.cars = cars || []; 
  }

  addCar(car) {
    this.cars.push(car);
  }

  removeCar(carId) {
    const carIndex = this.cars.findIndex(function(car) {
      return car.id === carId
    })

    if (carIndex === -1) { 
      console.log('The car doesnt exist!');
      return; 
    }

    this.cars.splice(carIndex, 1);
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