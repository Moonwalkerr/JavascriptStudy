// Learning more about "this" keyword and using method within object

var user = {
    firstName: 'Abhishek',
    lastName: 'Mishra',
    role: 'admin',
    age: 20,
    coursesList: [],
    buyCourse: function (courseName) {
        // this helps us to use var 'coursesList' in current context while code is executed
        this.coursesList.push(courseName);
    },

    getUserDetails: function(){
        return `The user ${this.firstName} ${this.lastName} has bought following courses : ${this.coursesList}`;
    }
}

var newCourse = 'React JS';
user.buyCourse(newCourse);
// console.log(user.coursesList);

user.buyCourse("Angular");
// console.log(user.coursesList);

console.log(user.getUserDetails());