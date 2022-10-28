"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = {
    name: "John",
    id: 1,
    email: "",
};
userLogin;
let user = {
    name: "John",
    id: 1,
    email: "",
};
let employee = {
    name: "John",
    id: 2,
    email: "",
    salary: "5000",
};
let [...users] = [
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
