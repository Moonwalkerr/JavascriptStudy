//  Object in JS => Dictionray in python
var user = {
    firstName: 'Abhishek',
    lastName: 'Mishra',
    age: 21,
    fbSignUp: false
}

// accessing an object element
console.log(user.age);
console.log(user.firstName);
console.log(user['lastName']);


// Modifying an element in Object
user.age = 22;
console.log(user.age);


var mobilePhone = {
    modelName: "Alpha-X",
    modelNum: '22331x23',
    ramCapacity: '2Gb',
    storageCapacity: '16Gb',
    color: 'navyblue',
    screensize: '5*12',
    price: 6000
}

console.log("The price of the mobile phone is : ",mobilePhone.price);