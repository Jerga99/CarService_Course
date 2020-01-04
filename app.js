

class Car {
  brand = '';
  type = '';
  produceYear = null;

  constructor(brand, type, produceYear) {
    this.brand = brand;
    this.type = type;
    this.produceYear = produceYear;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.type} - ${this.produceYear}`); 
    return true;
  }
}


function runApp() {
  const car = new Car('mercedes', 'benz', 1995);
  const car2 = new Car('mitshubishi', 'lancer', 2002);
  // car['brand'] = 'mercedes';
  // car.type = 'benz';
  // car.produceYear = 1995;
  
  car.displayInfo();
  car2.displayInfo();
}

runApp();

