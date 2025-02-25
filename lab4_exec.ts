import {Transport} from "./lab4";
import IOwner = Transport.IOwner;
import ICar = Transport.ICar;
import Owner = Transport.Owner;
import Car = Transport.Car;
import Motorbike = Transport.Motorbike;
import IMotorbike = Transport.IMotorbike;
import IVehicle = Transport.IVehicle;
import Vehicle = Transport.Vehicle;
import IVehicleStorage = Transport.IVehicleStorage; 
import VehicleStorage = Transport.VehicleStorage;
import Docs = Transport.Docs;
import CarcaseType = Transport.CarcaseType;
import ClassCar = Transport.ClassCar;



const owner: IOwner = new Owner("Морозова", "Ольга", "Владимировна", new Date(), Docs.PASSPORT, 324444124, 244444);
const car1: ICar = new Car("BMW", "X5", 2015, 4444, 12321, owner, CarcaseType.Crossover, ClassCar.C);
const car2: ICar = new Car("BMW", "X3", 2019, 5555, 56565, owner, CarcaseType.Crossover, ClassCar.C);


const owner1: IOwner = new Owner("Матвеев", "Артур", "Романович", new Date(), Docs.POLIC, 23525, 325765);

const bike1: IMotorbike = new Motorbike("cool", "colcol", 2010, 2525, 2345, owner1, true, "маленький");
const bike2: IMotorbike = new Motorbike("lave", "lamelame", 2015, 1234566, 6789, owner1, false, "большой");


const v1: IVehicle = new Vehicle("Chevrolet", "Camaro", 2010, 242, 21421, owner1);
const v2: IVehicle = new Vehicle("Chevrolet", "Captiva", 2003, 2134, 124, owner1);
const v3: IVehicle = new Vehicle("Nissan", "180SX", 2024, 242, 56845, owner);

const vehicleStorage: IVehicleStorage<IVehicle> = new VehicleStorage();
vehicleStorage.save(v1);
vehicleStorage.save(v2);
vehicleStorage.save(v3);

console.log(vehicleStorage.getAll());