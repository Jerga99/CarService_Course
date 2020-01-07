

class Car {
  brand = '';
  type = '';
  produceYear = null;

  constructor(carData) {
    this.brand = carData.brand;
    this.type = carData.type;
    this.produceYear = carData.year;
  }

  displayInfo(additionalInfo) {

    if (additionalInfo) {
      console.log(`${this.brand} ${this.type} - ${this.produceYear} - ${additionalInfo}`); 
    } else {
      console.log(`${this.brand} ${this.type} - ${this.produceYear}`); 
    }

    return true;
  }
}

module.exports = Car;