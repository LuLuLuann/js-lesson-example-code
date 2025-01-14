console.log('running ops')
console.log(5>4); //true
console.log(5<4); //false

console.log(3>=3); //false
console.log(3>=3); //true

console.log(10<=44); //true

console.log(100 == 100);
console.log(100 == 10);

// (==) type conversion 
console.log(3=="3"); // true

// (===) no type conversion (checks for vale and data type)
console.log(3 === "3"); //false

//So the difference is basically how thorough do you want it to check how true it is. Triple equal signs checks the value AND the data type. Double equal sign only checks the value. So is 3 = 'three'? Yes, but is the data type the same? No, 3 is a number 'three' is a string.

// ( != ) This means "not equal"
console.log(10 != 100); //true
console.log(10 != 10); // false

// ( != ) type conversion
console.log(10 != "10"); //false

// ( !== ) No type conversion
console.log(10 !== "10"); //true

// if same data type - but both are numbers so it will add
console.log(3 + 3); //6

// two different data types -- will convert both to "strings" and concatenate them (removes the space)
console.log(3 * "3"); //"33" 

console.log("hello" + "world"); //helloworld

//will convert a string to a number so you can add them
console.log(3 + Number("3")); // 6

// We never use one equal sign for math or comparison operators because one equals is an assignment operator. It assigns a variable a value. 

// Assignment operator =

// Comparison operator == 
//Checks if they're the same value

//Comparison Operator ===
//Checks if they're the same value AND the same data type



let result = 3+3; 
console.log(result);

let accountBalance = 100;
let price=10; //true
//let price=100; //false
let purchaseValid = price < accountBalance;
console.log(purchaseValid);

if (purchaseValid){
    alert("thanks for your purchase")
}

// if purchase is NOT valid !purchaseValid
// We can use this later with if/else and different statements
if (!purchaseValid){
    alert("try another card")
}

console.log(purchaseValid);

