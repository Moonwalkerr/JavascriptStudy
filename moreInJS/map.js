var myMap = new Map();
// Maps != regular objects

// Inserting new values to Map
// set(key,value)

myMap.set(1,"ABHI");
myMap.set(2,"Mishra");
myMap.set(3,"Rock");
myMap.set(4,"MJ");
myMap.set(5,"ABC");

console.log(myMap);
/**
 * Expected Output 
 * Map(5) {
 * 1 => "ABHI",
 *  2 => "Mishra",
 *  3 => "Rock",
 *  4 => "MJ",
 *  5 => "ABC"
 * }
 */



// accessing Key and values using FOR OF LOOP :
for(let [key,value] of myMap){
    console.log(key,value);
}

// accessing Key and values using FOR OF LOOP :
myMap.forEach((value,key)=>{
    console.log(value,key);
})

/**
 * Diff btw For Of and For Each functions implemented on Maps 
 * is 
 * for of returns key, value
 * forEach returns (value, key)
 */