abstract class Vehicle {
    public brand: string;
    protected year: number;
    private readonly id: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
        this.id = Date.now();
    }

    public getId(): number {
        return this.id;
    }

    abstract getInfo(): string;

    public startEngine(): void {
        console.log(`Двигатель ${this.brand} запущен.`)
    }
}

class Car extends Vehicle {

    model: string;

    constructor(brand: string, model: string, year: number) {
        super(brand, year)
        this.model = model;
    }

    public getInfo(): string {
        return (`Автомобиль ${this.brand} ${this.model}, ${this.year} г.в. (ID: ${this.getId()})`);
    }

    public startEngine(): void {
        console.log(`Автомобиль ${this.model} заводится с ключа.`);
        super.startEngine();
    }
}

class Motorcycle extends Vehicle {

    type: string;

    constructor(brand: string, type: string, year: number) {
        super(brand, year)
        this.type = type;
    }

    getInfo(): string {
        return (`Мотоцикл ${this.brand}, тип ${this.type}, ${this.year} г.в. (ID: ${this.getId()}).`)
    }
}

class Garage {

    private vehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
    }

    listVehicles(): void {
        this.vehicles.forEach(v => {
            console.log(v.getInfo());
        });
    }

    findVehicleById(id: number): Vehicle | undefined {
        return this.vehicles.filter(v => v.getId() === id)[0];
    }
}


const garage = new Garage();

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("BMW", "X5", 2023);

const moto1 = new Motorcycle("Yamaha", "sport", 2022);
const moto2 = new Motorcycle("Harley-Davinson", "cruiser", 2019);

garage.addVehicle(car1);
garage.addVehicle(car2);
garage.addVehicle(moto1);
garage.addVehicle(moto2);

console.log("Список транспорта");
garage.listVehicles();

const searchId = car1.getId();

const foundVehicle = garage.findVehicleById(searchId);

if (foundVehicle) {
    console.log("Найден транспорт: ");
    console.log(foundVehicle.getInfo());

    foundVehicle.startEngine();
} else {
    console.log("Транспорт е найден");
}