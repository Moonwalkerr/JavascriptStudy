var myname = "Abhishek";

function sayName(){
   var name = "Moonwalker";
//    console.log(name);
   // considered as a scope

   sayName2();

   function sayName2(){
       console.log(name);
   }


}
console.log(myname);

sayName();


// if {

/**
 * Not considered as a scope
 */

// } 