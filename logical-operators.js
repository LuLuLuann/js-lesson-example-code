//The && (logical AND) operator compares two or more conditions’ results and returns true when all conditions are true.

let thisLogic1 = 3 > 2 && 6 == 6; // thisLogic1 is true
let thisLogic2 = 3 > 2 && 6 == 7; // thisLogic2 is false

//The || (logical OR) operator compares two or more conditions’ results and returns true when at least one is true.
let thisLogic3 = 3 > 2 || 6 == 6; // thisLogic3 is true
let thisLogic4 = 3 > 2 || 6 == 7; // thisLogic4 is true


//The ! (logical NOT) operator negates a given result.
let thisLogic5 = !(3 > 2 && 6 == 6); // thisLogic5 is false
let thisLogic6 = !(3 > 2 || 6 == 7); // thisLogic6 is false


// Logical operator OR  ( || )
// Logical operator AND ( && )
// Logical operator NOT ( ! )

let thisLogic = 3>2 && 6 === 6;
thisLogic = 3>4 && 6===6;
thisLogic = 3>2 && 6 ===3;
console.log("===> ", thisLogic);

let res = 3>2 || 6===6; 
res = 3>5 || 6===6;
console.log("RES ===>", res); 

// let res2 = true;
// let res2 = !true; //false;

// let res2 = (3>2 && 6 === 6); //true
let res2 = !(3>2 && 6 === 6); //false
console.log("Negates ===>", res2);