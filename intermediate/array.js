

// typical way of array declaration
var stNames = ['a','b','c','d'];


// modern way
var states = new Array('Raj', 'M.P', 'U.P', 'Assam');
// console.log(states); 

states[2] = "Jhk";
console.log("After update",states);

states.pop();
console.log(states);

// adds new value at I index, cost ineffctive operation
states.unshift('MY States');
console.log(states);

// pops I value
states.shift();
console.log(states);


// console.log(states.indexOf('Assam'));

del_index = console.log(states.indexOf('Assam'));
console.log(states);
// handy in deleting any index
states.pop(del_index);
console.log(states);


// String elements => Array
var myName = "Abhishek";

console.log(Array.from(myName));

