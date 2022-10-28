interface UserInterface {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let { name: userName, email: userLogin }: UserInterface = {
  name: "John",
  id: 1,
  email: "",
};

userLogin;

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

let [...users]: UserInterface[] = [
  {
    name: "Prince",
    id: 1,
    email: "",
  },
  {
    name: "Prince",
    id: 2,
    email: "",
  },
  {
    name: "Prince",
    id: 3,
    email: "",
  },
  {
    name: "Prince",
    id: 4,
    email: "",
  },
  {
    name: "Prince",
    id: 5,
    email: "",
  },
];

console.log(users);
let result = users.filter((users) => users.id > 3);
console.log(result);

export { LoginInterface, UserInterface, EmployeeInterface };
