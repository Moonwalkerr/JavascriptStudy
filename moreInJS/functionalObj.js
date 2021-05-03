var User = function(firstName, lastName, courseCount) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;

    this.getCourseCount = function() {
        console.log(`Course Count = ${this.courseCount}`);
    }
}


// regular function, this keyword points toward window obj, so undefined
// var abhi = User("Moonwalker","Abhi",2);


// new Keyword is responsible for:
// using the default template,
// invoking the constructor
// instantiation
var abhi = new User("Moonwalker","Abhi", 2);
// console.log(abhi); // user 1


var user2 = new User("ABC","sda",5); // user 2

if (user2.hasOwnProperty("courseCount")){
    user2.getCourseCount();
}