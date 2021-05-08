class User  {
    constructor(userName,email){
        this.userName = userName;
        this.email = email;
    }

    // no need to use "function" keyword for defining a method inside a Class

    getInfo(){
        console.log(`The user name is ${this.userName}
        The user email is ${this.email}`);
    }

    skillsets = [];
    addSkills(...skills){
        this.skillsets.push(skills);
        this.skillsets = this.skillsets[0];
    }
}

module.exports = User;

// Using Class inside the same file
let firstUser = new User("Moonwalker","Abhi.gmail.com");

firstUser.addSkills("React","Javascript","Version Control");
console.log(firstUser.skillsets);