var myName = "Abhishek";


if (myName === window.myName){
    console.log("True");
}//  will throw an exception as "Window" is not the name for Node.js


/**
 *  Global context is a big entity in which all functions/ statements inside our JS code is wrapped up on it
 */