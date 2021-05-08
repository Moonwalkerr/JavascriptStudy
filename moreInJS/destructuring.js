// Destructuring of Data In Javascript

const user = ["abhi", 5, "admin"];

// Typical way of accessing a value inside array
console.log(user[2]);

// Accessing the value inside array using destructuring
const [name , rank, role] = user;
console.log(role);


const userObj = {
    name:"abhi", 
    rank:5,
    role:"admin",
};

// Typical way of accessing a value inside obj
console.log(userObj.role);

// Using Destructuring
// Note: The var names while destructuring must be same in case of Objects
const {name, rank, role} = userObj;
console.log(role);