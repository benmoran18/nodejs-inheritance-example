/**
 * ES6 version of inheritance example
 */

'use strict'

// Base class
class Vehicle {
	constructor(reg, numberOfWheels) {
		this.reg = reg;
		this.numberOfWheels = numberOfWheels;
		console.log('\nVehicle created!');
	}

	printSpecs() {
		console.log('\nVehicle specs:')
		console.log(`\tReg: \t\t\t ${this.reg}`);
		console.log(`\tNumber of wheels:\t ${this.numberOfWheels}`);
	}
}

// Subclass of Vehicle
class Car extends Vehicle {
	constructor(reg) {
		super(reg, 4);
		console.log('Car created!');
	}

	printSpecs() {
		console.log('\nCar specs:')
		console.log(`\tReg: \t\t\t ${this.reg}`);
		console.log(`\tNumber of wheels:\t ${this.numberOfWheels}`);
	}
}

let v1 = new Vehicle('Vehicle1', 4);
let c1 = new Car('Car1');

v1.printSpecs();
c1.printSpecs();
