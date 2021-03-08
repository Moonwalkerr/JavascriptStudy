// show user signout button if he is authenticated
// otherwise show him login / signup option
// currently done using CLI


var authenticated ;
authenticated = true;
// we can use either this typical way 
function checkLoginWithoutTernary(authenticated){
if (authenticated){
    console.log("Signout Button");
}
else{
    console.log("Show login / signup button ")
}

}

// Easier and better way using TernaryOperators -- shorthand alternative of is else conditionals

function checkLoginWithTernary(authenticated){
    return authenticated ? console.log("Signout button") : console.log("Login / signup button");
}

checkLoginWithTernary(authenticated);


