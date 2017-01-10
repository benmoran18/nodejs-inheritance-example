
// Base class constructor
function Vehicle(reg, numberOfWheels) {
	this.reg = reg;
	this.numberOfWheels = numberOfWheels;
	console.log('\nVehicle created!');
}

// Base method
Vehicle.prototype.printSpecs = function() {
	console.log('This vehicle with reg ' + this.reg + ' has ' + this.numberOfWheels + ' wheels');
}

// Define the subclasses
function Car(reg) {
	Vehicle.call(this, reg, 4);	// This calls the super class constructor on this object
	this.vehicleType = 'Car';
	console.log('Car created!');
}

// Subclass of Vehicle
function Motorcycle(reg) {
	Vehicle.call(this, reg, 2);	// This calls the super class constructor on this object
	this.vehicleType = 'Motorcycle';
	console.log('Motorcycle created!');
}

// Set the prototype of Car and Motorcycle to the Vehicle prototype to inherit methods.
Car.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype = Object.create(Vehicle.prototype);

// After setting the prototypes we need to reassign the correct constructor to each subclass.
Car.prototype.constructor = Car;
Motorcycle.prototype.constructor = Motorcycle;

// Methods can be replaced with new ones to perform different operations in the subclass.
Car.prototype.printSpecs = function() {
	console.log('This CAR with reg ' + this.reg + ' has ' + this.numberOfWheels + ' wheels');
}

var vehicle1 = new Vehicle('V1', 18);
var car1 = new Car('REG1');
var motorcycle = new Motorcycle('MOTO1');

// Call the same on the different classes to see the results
vehicle1.printSpecs();	 // This vehicle with reg V1 has 18 wheels
car1.printSpecs();	 // This CAR with reg REG1 has 4 wheels
motorcycle.printSpecs(); // This vehicle with reg MOTO1 has 2 wheels
