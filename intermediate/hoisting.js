
//  due to global context, it is available throughout anywhere in the code
sayHello();

function sayHello(){
    var myName = "Hello";
    console.log("myName :"+myName);
}

// This will output an exception due to 2nd rule of Contexts
// getName("Abhishek");
var getName = function(name){
    console.log(name);
}

// The following will give undefined as output
console.log("myname :",myName);
var myName = "Abhishek";

// This will output the name, with help of global context
console.log("myName :"+ myName);

// This will work by Execution Context, will instantly execute and go away
// has nothing to do with global context's "myName" variable
sayHello();
