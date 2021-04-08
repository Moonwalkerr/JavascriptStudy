// Regular Function calls : this ==> Window Object




// Regular function call
console.log(this);


var user = {
    firstName: 'Abhishek',
    lastName: 'Mishra',
    coursesList:['React','Angular','Vue'],
    getCourseCount: function() {
        console.log("Line 8",this);
        // console.log(this.coursesList.length);
        function sayHello(){
            console.log("Line 11",this);
        }
        // Regular function call
        sayHello()
    }
}


// Function call through an object
user.getCourseCount();