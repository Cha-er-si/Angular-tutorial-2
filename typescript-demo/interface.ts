interface UserInterface {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: UserInterface = {
  name: "John",
  id: 1,
  email: "",
};

interface EmployeeInterface extends UserInterface {
  salary: string;
}

let employee: EmployeeInterface = {
  name: "John",
  id: 2,
  email: "",
  salary: "5000",
};

interface LoginInterface {
  login(): UserInterface;
}

export { LoginInterface, UserInterface, EmployeeInterface };
