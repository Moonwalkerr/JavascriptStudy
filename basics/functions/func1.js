// basic function
function sayHello(){
    console.log("Hello There, How you Doin?");
}
// sayHello();


// function that accepts argument
function sayName(name){
    console.log(`
    Your name is, ${name},
    Its so good to have you here ${name}!
    ALL THE BEST !`);
}

// sayName('Abhishek');


// function with return keyword
function greet(name){
    return "Hello, Namaste " + name;
}
var greetings = greet("Moonwalker");
console.log(greetings);