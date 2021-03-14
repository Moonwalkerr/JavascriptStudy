// Falsy values :-
// undefined
// 0
// null
// ''
// NaN
// apart from these all values will be truthy valuess
// js is a tricky language


var user = "2";

// console.log(2+2);
// console.log(2+"2");

// js considers either string or number if we use ==. Type cohersion
// if (2==user){
//     console.log(typeof user);
// }

// to avoid this we use === instead that checks the type of the variable itself too
// user = 2;
if (2===user){
    console.log(typeof user);
}