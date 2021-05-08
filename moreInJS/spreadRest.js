// var returnedVaue = Math.max(4,3,23,10); // returns max value 
// console.log(returnedVaue);

// var myObj = {};

// Object.assign(myObj,{a:1,b:4,c:3},{z:1,g:2});
// /** Compiles / Joins all objects inside into one
//  * Expected Output { a: 1, b: 4, c: 3, z: 1, g: 2 }
//  */

// console.log(myObj);


// Spread Operator : Takes a group of values : arrays or objects and spreads them into individual values

function sum(a,b){
    // if an argument which is not meant to be inside a function, it is ignored
    return a + b;
}

var myArray = [2,4];

// console.log(sum(myArray));  // will throw undefined issue

// So in this scenario, we can use Spread operator here
// console.log(sum(...myArray))


// Rest Operator :  Looks Like Spread operator while using,
// But Rest Operator converts individual values into an Array 

function sumAll(...args){
    // console.log(args) // we ll see an array formed from individual values
    let sum = 0;
    for(let arg of args){
       sum = sum + arg;
    }
    return sum;
}

console.log(sumAll(1,2,34,4))

// Spread Operators : Objects / Arrays to individual values
// Rest Operators : Individual values to Array


/**
 * Intersting Function
 */

function init(a,b,...args){
    let multiply = a*b;
    let sum = 0
    for (let arg of args){
      sum =  sum +arg;
    }
    console.log(sum);
    console.log(multiply)
    console.log(args);
    return [sum,multiply];
}


console.log(init(...myArray,4,5,6,67));