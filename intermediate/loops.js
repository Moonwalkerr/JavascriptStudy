// for (let i=0; i<10;i++){
//     console.log(i);
// }


const states = ['Raj','Guj',124,'Punjab','U.P','M.P']

// For loop
for (let i = 0; i < states.length; i++) {
    // if(typeof states[i] !== 'string') continue;
    // if(typeof states[i] !== 'number') continue;
    const element = states[i];
    console.log(element);
}


// while loop
let i = 0;
while(i < states.length) {
    console.log(states[i]);
    i++;
}


// do while loop
let i = 0;
do{
console.log(i);
    i++;
}while(i<=20);
// used when we need to execute the block of code at least once -- Hardware domains usage