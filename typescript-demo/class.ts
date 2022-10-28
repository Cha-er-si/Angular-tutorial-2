import { LoginInterface, EmployeeInterface, UserInterface } from "./interface";

interface AddressInterface {
  street: string;
  city: string;
  state: string;
  pin: string;
}
class Employee implements LoginInterface {
  #id: number;
  protected name: string;
  //   address: string;
  address: AddressInterface;

  get empId(): number {
    return this.#id;
  }
  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: AddressInterface) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  login(): UserInterface {
    return {
      name: "John",
      id: 1,
      email: "",
    };
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", {
  street: "123 Street",
  city: "City",
  state: "State",
  pin: "1",
});
console.log(john);
let address = john.getNameWithAddress();
console.log(address);

class Manager extends Employee {
  constructor(id: number, name: string, address: AddressInterface) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}
let doe = new Manager(1, "John", {
  street: "123 Street",
  city: "City",
  state: "State",
  pin: "1",
});
console.log(doe.getNameWithAddress());
