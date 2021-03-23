/**
 * Define a function that can answer the role of a user :-
 * admin - ALL Access to the site 
 * subadmin - Access to add & delete courses 
 * testprep - Access to create / delete test sets
 * user - Access to watch courses 
 * other - Site Visitor, Access to website view
 * Input - getRole(username, role)
 * Output - Role Description Statement
 */

var getUserRole = (name,role) => {
    var adminStatement = "You Have ALL Access to this site";
    var subadminStatment = "You have Access to add & delete courses";
    var testprepStatment = "You Have Access to create / delete test sets";
    var userStatment = "You Access to watch courses";
    var otherUserStatment = "You are a Site Visitor, Access to website view";
    switch (role) {
        case "admin":
            return `Welcome ${name}, ${adminStatement}`;   
            // break; break is not implemented when using return keyword
        case "subadmin":
            return `Welcome ${name}, ${subadminStatment}`;
            // break;
        case "testprep":
            return `Welcome ${name}, ${testprepStatment}`;
            // break;
        case "user":
            return `Welcome ${name}, ${userStatment}`;
            // break;
        case "other":
            return `Welcome ${name}, ${otherUserStatment}`;
            // break;
        default:
            return `Welcome ${name},Sorry We can't identify your Role
            Please retry and input correct Role`;
            // break;
    }
}


var role1 = getUserRole("Abhishek","admin");
var role2 = getUserRole("Moonwalker","other");

console.log(`${role1}, 
${role2}`);
