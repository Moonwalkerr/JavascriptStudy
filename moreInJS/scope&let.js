// use case of let keyword in JS Scope

// console.log(firstName);

// var firstName = "abhi";
// Will give undefined, not good for backend as we need an error to debug it

let firstName = "abhi";
//  Now console.log() will throw an error ! 



if (true){
    let newName = "Moonwalker";
    console.log(newName);
    // prints newName 
    // if we used var instead, then newName will run outside the scope of this if statement which is bad
}


console.log(newName);
// Throws error
