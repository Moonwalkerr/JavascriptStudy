class User  {
    constructor(userName,email){
        this.userName = userName;
        this.email = email;
    }

    // a getter
    getInfo(){
        console.log(`The user name is ${this.userName}
        The user email is ${this.email}`);
    }

    // Defining a private variable inside a class using "#"
    #skillsets = []; // private variable, can't be accessed directly outside the class

    // Getter : used to get a value of private vaiable from a class
    getSkillsets(){
        return this.#skillsets
    }

    // setter : To update, modify a information of prv variable inside a class
    addSkills(...skills){
        this.#skillsets.push(skills);
        this.#skillsets = this.#skillsets[0];
    }
}

let firstUser = new User("Moonwalker","Abhi.gmail.com");

firstUser.addSkills("React","Javascript","Version Control");
console.log(firstUser.skillsets); // since its private variable, will throw undefined

console.log(firstUser.getSkillsets()); // using getter to access private variable of class User