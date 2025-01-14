console.log("hello")
////////////////// CODE BLOCKS

//GLOBAL SCOPE - not inside any other scope
let lastName = "Pain";
let firstName = "Max";

{
    //LOCAL SCOPE - inside curly brackets - onside another scope
    let firstName = "John";
    let lastName = "Soap";
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName) // will log "Max Pain" if only defined in global scope BUT "John Soap" if defined in the local scope
    //local scope can see and read the global scope
    console.log(firstName)

}
console.log(fullName) // will return a reference error because the global scope cannot see the local scope

//  you can look up (into global) but not down (into local) in a scope -- nested scope rule

//local scope will search local scope first then at global scope to try to find the information

// "LET" defines a new variable so they won't override each other. 

console.log(window); //does not need to be defined
// WINDOW is the top of global scope chain
// part of BROWSER OBJECT MODEL (BOM)

window.alert("hey"); // ALERT is listed under window

{ { { { window.alert{ "hey" } } } } } //also works

var pollution = 'sucks'; // logs "sucks"
let pollution = 'sucks' // will not log "sucks" on the window object. will result in an error. 
//if you want to use LET you have to console log it but not use the window object

console.log(window.pollution);

let x = 10;
let y = 5;

{
    let z = x + y;
    console.log(z);
}
//Although using var in the global scope results in a global variable being created, interestingly, those created using let and const do not appear as properties on the window object. This is yet another benefit of using let and const; avoid global pollution!

//VAR

// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }

//   {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

let x = 10;
let y = 5;

{
    // var z = x+y; // this will log "15" -- USING VAR IS BAD PRACTICE BECAUSE IT CAN BE READ ANYWHERE - LOCAL OR GLOBAL SCOPE -- DON'T USE VAR!
    let z = x + y; // will result in an error
    console.log(z);
}

let x = 10;

{
    let y = 5;
    {
        let z = x + y;
        console.log(z);
    }
}

let x = 10;

{
    let y = 5;
    {
        let z = x + y;
    }
    console.log(z);
}

/////////////////// CONTROL FLOW AND CONDITIONALS

if (x == 10) {
    // do this
} else {
    // do this
}

////////////////// SINGLE LINE BLOCK
if (total > 5) console.log("Success!");
else console.log("error");

/////////////////// MULTILINE BLOCK
//   let total = 10;
let total = 1;

if (total === 10) {
    console.log(`Total is equal to ${total}`);
} else {
    console.log("Sorry total is not equal to 10");
}
console.log(`end of script`)

// concatenation
// console.log("success!" + " " + total + " " + (3+3))
// backticks = template literals
// console.log(`Total is equal to )

let number = 2;
if (number > 0) {
    //code
}
else {
    //code
}
//code after if

//VALID CODE
let x = 5;

if (x > 0)
    console.log('Positive!');
else
    console.log('Negative.');

// Including multiple statements requires blocks. This is not valid:

// let x = 5;

// if (x > 0)
//     console.log('Positive!');
//     x++;
// else
//     console.log('Negative.');
x--;
// trying to run it will get a SYNTAX ERROR
//  SyntaxError: Unexpected token 'else'. 

// This is because JavaScript is viewing the code like this:

// let x = 5;

// if (x > 0) {
// 	console.log('Positive!');
// }

// x++;

// else {
// 	console.log('Negative.');
// }

// x--;

///////////// TRUTHY & FALSY VALUES

if (1) {
    console.log("true");
} else {
    console.log("falsy");
}

let secretCode = "";

if (secretCode) {
    console.log("true");
} else {
    console.log("falsy");
}

/// all values **are truthy unless they are defined as falsy, and the only falsy values are:**
// false
// 0
// -0 (negative 0)
// 0n (notation for really big numbers)
// ""
// null
// undefined
// NaN

if (42) { } //true
if (-42) { } //true
if ("0") { } //false
if ("false") { } //false
if (Infinity) { } //false

let num = 0;
if (num > 0) {
    console.log("positive");
} else {
    console.log("negative");
}

let userAge = x;
//let userAge = prompt("enter your age");
//let paidUser = true;

if (userAge >= 18) {
    console.log("Access granted (Yeah yeah yeah yeah yeah)")
} else {
    console.log("Access denied (No no no no no)");
}

if (paidUser) {
    console.log("unlimited music");
} else {
    console.log("watch ads every 30 mins");
}

let value = 8;
if (value > 10) {
    console.log("greater");
    // else if is comparing it against something 
} else if (value < 10) {
    console.log("lower");
    // else is if nothing to compare it to
} else {
    console.log("invalid value");
}

// using console.log(===========) is a way to make your console log easier to read by putting it inbetween code as a separator 

// NESTED "ELSE...IF" STATEMENTS -- MOST SPECIFIC LISTED FROM TOP TO BOTTOM BC WHEN ONE IS TRUE IT DOESN'T READ AS 
userAge = 6;
// ages 13 & lower
if (userAge <= 13) {
    console.log("kids team");
    // 14-17  
} else if (userAge < 18) {
    console.log("teenagers team");
    // 18 and up
} else if (userAge >= 18) {
    console.log("Adult team");
    if (userAge > 59) {
        console.log("senior team");
    }
} else {
    console.log("Age is not Valid")
}
console.log("end of script");

//EXERCISE 
// Write a nested if...else statement.
// Declare a variable called num.
// Add an if...else statement that checks if num is positive & greater than 100.
// Add another statement that checks if num is positive but less than 100.
// Add a final statement to check if num is negative.

let num1 = 54;

// ATTEMPT 1:
// incorrect
// if (num1 >= 0 && num>100){
//     console.log("Positive & greater");
// } else if (num1 < 100){
//     console.log("positive but less than 100");
// } else if (num1 < 0){
//     console.log("negative");
// }

//check for positive
if (num1 >= 0) {
    if (num1 > 100) {
        console.log("positive & greater than 100");
    } else {
        console.log("positive & less than 100");
    }
} else {
    console.log("negative");
}

// Exercise
// Write an if..else statement for the following requirements:
// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")

let grade = 59

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}
// Note: Think about edge cases (things that might cause bugs) and adding them. 
// Ex: what if they input a letter, a word, a negative number or a number far above 100 (ex: 989), etc. 
// Note: You can add boundary conditions.

// SWITCH STATEMENTS
// it's like an if statement but they look for a specific instance instead of a range like an if statement would be. 
// Another option for control flow is the `switch` statement.

// The `switch` statement evaluates an expression, matching the expression's value to a `case` clause, and executes statements associated with that `case`, as well as statements in any `case` that follows the matching `case`.
// If you want to look for something specific - you can use a switch. Otherwise an if statement will work. BOTH can be used interchangeable though. Just another way of doing it
// the benefit of a switch case over an if statement -- it's cleaner, .............................

// BREAK breaks you out of the code block so that it doesn't keep running the codes underneath (ends the conditional state) -- Break means if you get to the case, then stop.
// CASE specifies what value the switch argument can be -- Both the switch argument and its case values must match in data type.
// DEFAULT is like ELSE, it doesn't need a BREAK statement

let x = '0';
switch (x) {
    case '1':
        // do something...
        break;
    case '2':
        // do something...
        break;
    default:
        // do something...
        break;
}

// simple calculator that can only perform four different arithmetic operations on two numbers.
let x = 5;
let y = 4;
let operand = "*";
switch (operand) {
    case "+":
        console.log(x + y);
        break;
    case "-":
        console.log(x - y);
        break;
    case "*":
        console.log(x * y);
        break
    case "/":
        console.log(x / y);
        break;
    default:
        console.log("Invalid Operand")
        break;
}

// Example:
let statusCode = 200;

switch (statusCode) {
    case 200:
        console.log("Request was successful");
        break;
    case 404:
        console.log("Not found");
        break;
    case 500:
        console.log("Server error");
        break;
    default:
        console.log("Invalid status code");
}

// CONDITIONAL (TERNARY) OPERATORS
// way to write an if...else statement in a single line
//the only JavaScript operator that takes THREE operands: a condition followed by a question mark (`?`), then an expression to execute if the condition evaluates to `true`, followed by a colon (`:`), and finally the expression to execute if the condition is `false`.

// (conditional) ? (value_if_true) : (value_if_false)

let isAuthenticated = true;

let authorized = isAuthenticate ? "Granted" : "Denied";
// like if...else statement: isAuthenticated is TRUE ? Log "Granted" : ELSE log "Denied"

// EXAMPLE: if we wanted to test whether a value was equal to 10, we could do the following:

let x = 10;
let isTen;

if (x == 10) {
	isTen = true;
} else {
	isTen = false;
}

//Or, use a simple ternary operator to do the same thing easier:

let x = 10;
let isTen = x == 10 ? true : false;

// MY QUESTION: is it just your choice if you want to write an if.. else or a ternary? or would you use one over the other for a reason? can you nest ternary operators too?
// CLASSMATE'S ANSWER: Your choice… and yes you can nest ternary operators... as teacher said if is more readable.

// ERRORS
// Ex:  Reference Error (fixed within the source code itself)
// Ex: Syntax error (fixed within the source code itself)

//THROWING AN ERROR
//We create our own errors through the use of the THROW statement. 
// The throw statement ----> stops execution of the current block of code (the statements after the throw will not be executed), and the program will terminate (unless... there's a CATCH)

// Here's an example where we `throw` the string "Error - I don't know what I'm doing."

let x = 10;

if (x < 0) {
	console.log("Negative!");
} else {
	throw "Error - I don't know what I'm doing.";
}

console.log("Does this log?");

// Executing this code will give us `Uncaught Error - I don't know what I'm doing.` and no, "Does this log?" **will not** log.

// THROW KEYWORD
//EX:

let amount = 10; 

if (amount < 0) {
    console.log("NEGATIVE");
} else {
    console.log("inside the else");
    throw "Error - Idk what I'm doing";
    }

    console.log("Does this log?");

/// TRY AND CATCH (try...catch) STATEMENT
try {
    
} catch (error) {
    
}

// ----------
try {
    if (orderAmount < 0) {
        console.log("Try again");
    }
} catch (error) {  // you can name "error" anything
    console.log(error);
    alert("Try again");
    // alert(`Amount ${orderAmount} not valid`)
}
console.log("Does this log?");