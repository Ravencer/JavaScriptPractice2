class Driver{
    constructor(name = "Ivan"){
        this.name = name;
    }
}
class Passenger{
    constructor(age, distance){
        this.age = age;
        this.distance = distance;
    }
}
class Taxi {
    constructor(plate, passengers, price){
        this.plate = plate;
        this.driver = new Driver();
        this.passengers = [];
        this.price = price;
    }
    addPassengers(passenger) {
        this.passengers.length < 4 ? this.passengers.push(passenger) : console.log("Taxi is full")
    }
    calculatePrice(passIndexes) {
        if(passIndexes.length > 0){
            let newArr = [];
            let total = 0;
            let count = 0
            this.passengers.forEach(passenger => {
                if(this.passengers.indexOf(passenger) === passIndexes[count]){
                    total = this.passengers[passIndexes[count]].distance * this.price;
                    console.log("Стоимость поездки для пассажира составит " + total);
                    count += 1;
                }
                else{
                    newArr.push(passenger);
                }
            });
            this.passengers = newArr;
        }
    }
}

let queue = [new Passenger(23, 11), new Passenger(55, 5), 
    new Passenger(18, 15), new Passenger(17, 3), new Passenger(32, 30)];
taxi1 = new Taxi("ТС235О", [], 20);
taxi1.driver.name = "Nikolay";
queue.forEach(passenger => {
    taxi1.addPassengers(passenger);
});
taxi1.calculatePrice([1, 2, 3]);
console.log(taxi1.passengers);