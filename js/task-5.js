class Car { 

  constructor({ maxSpeed, price, speed = 0, isOn = false, distance = 0 }){
    this._maxSpeed = maxSpeed;
    this._price = price;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;

  }
  static getSpecs(car) {
    console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
  }

  get price() {
    return this._price
  }
  
  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  accelerate(value) {
    if (this.speed + value < this._maxSpeed) {
      this.speed += value
    } else {
      this.speed = this._maxSpeed
    } 
  }
  
  decelerate(value) {
    if (this.speed - value <= 0) {
      this.speed = 0;
    } else {
      this.speed -= value; 
    }
  }

  drive(hours) {
    this.distance += hours * this.speed;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

Car.getSpecs(mustang);
console.table(mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000


