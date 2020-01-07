

class Car {
  brand = '';
  type = '';
  produceYear = null;

  constructor(brand, type, produceYear) {
    this.brand = brand;
    this.type = type;
    this.produceYear = produceYear;
  }

  // displayInfo(additionalInfo) {

  //   if (additionalInfo) {
  //     console.log(`${this.brand} ${this.type} - ${this.produceYear} - ${additionalInfo}`); 
  //   } else {
  //     console.log(`${this.brand} ${this.type} - ${this.produceYear}`); 
  //   }

  //   return true;
  // }
}

module.exports = Car;