//  typical function in JS
function isEven(num){
    if(num%2===0){
        return true;
    }
    return false;
}
// console.log(isEven(3));


// Arrow Function =>
var isEven_arrow = (num) =>{
    return num%2===0;
}
// console.log(isEven_arrow(2));


// Callback and every method in Arrays
var result = [2,4,6,8].every(isEven); //without using for loop we can easily iterate over all array elements using every()
// will return true if all elements of array are even otherwise false
// console.log(result); 

// More Modern way of using Callback Functions
var res = [2,4,6,7,8,1,21,5].every((num)=>{
    return num%2===0;
});   // curly braces need a 'return' keyword
// console.log(res);


// simpler way =>
var res_simple = [2,4,6,7,8,1,21,5].every((num)=>(num%2===0)); 
// parenthesis dont require a 'return' keyword
console.log(res_simple);