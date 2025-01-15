// Countdown to 0 with defining the variable

// let x = 10;

// while(x>=0){
//     console.log(`x is ${x}`);
//     x--
// }

// Countdown to 0 with user defining the variable
// let x = parseInt(prompt("Enter a number for the countdown"))
// while(x>=0){
//     console.log(`x is ${x}`);
//     x--
// }

// Log integers in multiples of 3 as long as they are less than 35
// let i = 0; 
// while (i<35){
//     console.log(`i is ${i}`);
// i+=3
// }
// can use a FOR LOOP or a WHILE LOOP for this (but this is just practice)

// Log integers that are multiples of 5 as long as they are less than 100
let y =5;
while (y<100){
    console.log(`y is ${y}`);
    y+=5
}

// Print integers between 0 and 20 with the following conditions:
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

let x = 0;
while (x<=20){
    if (x%2 === 0){
    console.log(x*3);
}
x++
}

// NESTED FOR LOOP

let str ="ABC";

// first for loop
for (let i = 0; i<str.length; i++){
    // this will console log A B C
    // console.log(str[i]);

    // loop inside the loop = NESTED FOR LOOP
    for (let j =0; j<str.length; j++){
    // this will console log AA AB AC BA BB BC CA CB CC
        console.log(str[i] + str[j])
    }
}

// Now, write a for loop that iterates from 1 to 20. The loop should:
// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.

// PRIME NUMBERS
// ATTEMPT 1:
// This doesn't work to show all the prime numbers because it needs a flag.
// for (let i = 2; i<=20; i++){
//     // "y<i" ----> We're checking if the numbers are divisible by anything under it.
//    for (let y=2; y<i; y++){ 

//        // if i is divisible by y
//        if (i%y ===0){
//            console.log(`${i} is not prime`);
//            break;
//        } else {
//            console.log(`${i} is prime`);   
// }
// console.log(i);
// }
// // console.log(`${i} is prime`);
// }
// ATTEMPT 2
// for (let i = 2; i<=20; i++){
//     let isPrime = true; // flag

//     // "y<i" ----> We're checking if the numbers are divisible by anything under it.
//     for (let y=2; y<i; y++){ 

//         // if i is divisible by y
//         if (i%y ===0){
//             isPrime = false;
//             console.log(`${i} is not prime`);
//             break;
//         } 
//     }
//     if(isPrime){
//         console.log(`${i} is prime`);   
// }
// }
// ATTEMPT 3:
for (let i = 1; i<=20; i++){
    let isPrime = true; // flag

    if (i === 1 || i===3){
        console.log(`${i} is Odd`);
    continue
    } else if(i%2 !== 0){
console.log(`${i} is Odd`);
    } 
//   if (i===2 || i%2 ==0){
if (i === 2) {
        console.log(`${i} is Even`); 
        continue
    } else if (i%2 ===0){
        console.log(`${i} is Even`); 
    }

    // "y<i" ----> We're checking if the numbers are divisible by anything under it.
    for (let y=2; y<i; y++){ 

        // if i is divisible by y
        if (i%y ===0){
            isPrime = false;
            console.log(`${i} is not prime`);
            break;
        } 
    }
    if(isPrime){
        console.log(`${i} is prime`);   
}
}


// Print all PRIME NUMBERS between 0 and 20.
// A prime number is greater than 1, and only divisible by 1 and itself.
// (need to do a nested "for loop")



// BONUS LOGICAL QUESTION

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.
let d=4;
