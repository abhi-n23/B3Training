/*
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class CarCl {
    constructor(company, speed) {
        this.company = company;
        this.speed = speed;
    }
        
    accelerate() {
        console.log(`${this.speed = this.speed + 10} km/h`);
    }
    brake() {
        console.log(`${this.speed = this.speed - 5} km/h`);
    }
};

class ElectricCarCl extends CarCl{
    #charge;
    constructor(company, speed, charge) {
        super(company, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed = this.speed + 20;
        this.#charge--;
        console.log(`${this.company} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
    
    brake() {
        this.speed = this.speed - 20;
        console.log(`${this.company} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
};
// ElectricCar.prototype = Object.create(Car.prototype);


const Rivian = new ElectricCarCl('Rivian', 120, 23);
console.log(Rivian);
Rivian.chargeBattery(90).accelerate().accelerate().accelerate().brake().brake();
console.log(Rivian);