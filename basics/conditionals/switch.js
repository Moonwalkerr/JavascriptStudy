// Agenda : Create an application with following roles:-
// admin - Full control
// subadmin - gets access to create / delete courses
// testprep - gets access too create / delete docs
// user - gets access to consume content

// if we need multiple but finite things to check out, and provide executions
// instead of using if else, switch & case conditionals are better way 

var user = "admin";
switch(user){
    case "admin":
        console.log("Welcome Admin. You have full control on this application");
        break;
    case "subadmin":
        console.log("Welcome Subadmin. You can create / delete courses in this application");
        break;
    case "testprep":
        console.log("Welcome Testprep. You can create / delete docs in this application");
        break;
    case "user":
        console.log("Welcome User. Here are the contents you can consume on this application");
        break;
    default:
        console.log("Welcome Trial User. You can go through this overview of the application");
        break;
    }