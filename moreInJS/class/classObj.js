// importing class from another file
const User = require("./class");

let firstUser = new User("Moonwalker","Abhi.gmail.com");

firstUser.addSkills("React","Javascript","Version Control");
const mySkillsets = firstUser.skillsets

console.log(`Total No of Skills till date ${mySkillsets.length}`);
mySkillsets.forEach(skills =>{ 
 console.log( skills)
   } )

