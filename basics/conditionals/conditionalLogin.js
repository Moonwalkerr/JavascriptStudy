// Agenda :- ALlow User to access the course / site if 
// Either on of the below is true
// Logged in with Facebook
// Logged in with Google
// Logged in with Email 

function log(value) {
    console.log(value);
}

function checkAccess(email, facebook, google) {
    if (email || facebook || google) {
        log("Access Given !");
    }else{
        log("Access Denied, Please Login with either of the given login methods");
    }
}
var email, facebook, google;
// email = false;
email = true;
facebook = false;
google = false;

checkAccess(email,facebook,google);