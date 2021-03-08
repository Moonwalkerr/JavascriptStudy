function log(value) {
    console.log(value);
}
function checkTemperature(tempertature) {
    if (tempertature <= 20) {
        log("It is cold out there !");
    }   
    else if (20<tempertature>35)  {
        log("It is moderate out there !");
    } 
    else {
        log("Oh boy its Hot out there !");
    }
}
var tempertature;

checkTemperature(18);

log("Temperature Check Complete !");
