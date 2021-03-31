// some more built in methods in our array

// fill() method
var arr = [1,2,3,4,5,6,,23,4,5,1,3];
// console.log(arr.fill(0));
console.log(arr.fill('abhishek',2,5));


// filter() method
var myNum = [2,33,521,535,12,93,63,21,84,33,99,120];

var result = myNum.filter((num) => num<22);
console.log(result);

