const user1 = {
    firstName : "Abhi", 
    lastName : "Mishra",
    getName : function(){
        console.log(this.firstName);
    }
}


const user2 = {
    firstName : "Moonwalker",
    lastName : "Abhi"
}


// Borrowing a method using Bind
// Bind gives us a reference back 

// user1.getName.bind(user2)();
var user2_name = user1.getName.bind(user2);
user2_name();


// Borrowing a method using Call method
// The diff here is, call directly calls the function/method instead of yeilding a reference
user1.getName.call(user2);
