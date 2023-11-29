//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make);



//After you write the derived Car class, you should test it out.
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, maxPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maxPassengers = maxPassengers;
        this.passengers = passengers;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
        this.started = false;
    }

    loadPassenger(num) {
    if ( this.maxPassenger > 5) {
        console.log("Max passenger capacity reached")
    }
    }
    checkService() {
        if (this.mileage > 3000) {
            console.log("Time For Service Appointment")
            this.scheduleService = true
            return this.scheduleService;
        }


}
    start() {
    if (this.fuel > 10) {
     console.log("engine will start");
     return this.started = true;
    }
    else {
        console.log("no fuel");
        return this.started = false;
    }
}


}


 let Toyota = new Car("Toyota", "SUV", "Blue", "5000", 5, 3, 4, 160, 50, false);
 console.log(Toyota.start());
//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
