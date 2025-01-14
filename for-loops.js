// for (initialization; condition; afterthought) {
// 	statements
// }

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// i for index or i for incrementer

// FOR LOOPS

for (let i=0; i<10; i++) {
    console.log("step one");
    console.log("step two");
    console.log(`The value of i is: ${i}`);
}
// i<10 will count to 9
// i<=10 will count to 10
// i<11 will count to 10

// i++ -----> will increment by 1's
// i+=2 ----> will increment by 2's

//counting down from 10 
// -- is subracting one each time
for (let x=10; x>=1; x--){
    console.log(x)
}

// counting from 5 to 15
for (let y=5; y<=15; y++){
    console.log(y);
}

// JS does not compute whitespace. Spaces are for us the developer to easily read, but our IDE (VScode) doesn't care

//! if you did below you would create an infinity loop (BAD! Don't do that or you will crash the system -- worst thing that could happen is that you . An infinity loop will show up in the console as numbers that keep getting higher):
// We can RE-USE the X variable and redefine it because they are both in local scopes, not global scopes. 

// console.log("------ COUNT (BY 1'S) FROM 5 TO 15 -----");
for (let x=5; x<=15; x++){
    console.log(x);
}

//! ANOTHER EXAMPLE OF INFINITY LOOPS: 
// if we start at 1, and tell it to continue until we hit 10, but then tell it to count backwards 

// for (x=1; x < 10; x--)

// We will create an infinity loop because it is counting down from 1 and never hits 10 (1, 0, -1, -2....)

console.log("------ OUTPUT ODD NUMBERS FROM 1 TO 10 -----");
for (let i=1; i<= 10; i+=2){
    console.log(i);
}


for (let i=1; i<= 10; i+=2){
    if (i % 2 !== 0){
console.log(i)
    }
}
// if "the remainder of division by 2 is not equal to 0" ---> if (i % 2 !== 0)

// if you forget "let" it will be a "var" which is a global scope variable: 
// for (i=1; i<= 10; i+=2){
//     if (i % 2 !== 0){
// console.log(i)
//     }
// }
// it will work, but it is BAD PRACTICE and can contribute to errors

console.log("-------- OUTPUT EVEN NUMBERS FROM 1 TO 10 ---------");

for(let i=1; i<= 10; i++){
    if(i%2 === 0){
        console.log("EVEN: ", i);
    }
}

console.log("-------- OUTPUT MULTIPLES OF 3, STARTING AT 6 AND ENDING AT 60 ---------");

for(let i=6; i<=60; i+=3){
    console.log(i);
}

console.log("-------- OUTPUT AN INCREASING NUMBER OF #, FROM 1 TO 7 ---------");
for (let i=1; i<=7; i++){
    console.log("#.repeat(i))");
}

console.log("---------ANOTHER OPTION-------");
// This will not work because it will intialize # and then add # so it will print ## 7x.
// for (let i=1;; i<=7; i++){
//     let hashtag = "#"
//     hashtag += "#"
//     console.log(hashtag);
// }

// IF you want to to have it print 7x, you will have to define the "#" on the outside of the for loop.
let hashtag = " "

for (let i =1; i<= 7; i++){
    hashtag += "#"
    console.log(hashtag);
}

console.log("----------LOOP OVER A STRING ---------");
let str = "Hello World!";
// starts counting at 0 -- accesses character by the index
console.log(str[0]);

// accesses the length of the string
console.log(str.length);

for(let i=0; i<str.length; i++){
    console.log(str[i]);
}

console.log("--------- IN SENTENCE FORM ----------")
for(let i=0; i<str.length; i++){
console.log(`The character ${str[i]} is at index{i}`);
}

console.log("----------FOR...IN LOOPS----------");
//  normally used for objects and they return the index or the property name
//  for.. in loop is less flexible. 
//  for every instance in string do this

// const str = "Hello World";
// for (const i in str) {
// 	console.log(str[i]);
// }

// const str = "Hello World";
// for (const c of str) {
// 	console.log(c);
// }

// const str = "Hello World";
// for (const c of str) {
// 	console.log(c);
// }


for(const i in str){
    console.log(str[i]);
}

let myObject = {name: "Max"}
// looping over object will return the property name
for (const i in myObject){
    console.log(i);
}

// something else is used for arrays

console.log("----------- 'FOR ... OF' LOOPS ------------");
// will access each character
// return the values of an iterable

for (const i of str){
    console.log(i);
}

for (const i of str){
    console.log(i).upperCase;
}

//  You can loop over an array and access each value in the array. 
let myArray =["Hello", "world", "JD", "HTML"]
for (const word of myArray){
    console.log(word);
}

console.log("------ THE 'CONTINUE' CONTROL FLOW STATEMENT IN 'FOR LOOPS' --------")
// 

// for (let i = 0; i<str.length; i++){
  
//     if(str[i] === 'l'){
//         continue
//     }
//     console.log(str[i]);
//     }

    // if continue is there the 'l' being true it will skip logging those letters and "continue" then it will log the other characters
    // continue will skip the code and go to the incrementer

    for (let i = 0; i<str.length; i++){
  
        if(str[i] === 'l'){
            break
        }
        console.log(str[i]);
        }
        // if it sees the "l" it will break out of the loop and not  continue. 

console.log("----------WHILE LOOP STRUCTURE----------")
//  VERY EASY TO TURN INTO INFINITY LOOPS
//  while loop doesn't have (initialization; condition; afterthought; incrementers - it just has the condition -- 

// let value = 30;

// while (value > 0) {
// 	console.log(value);
//     value--
// }

// ---OR --

// let value = 30; 

// while(value>0){
//     console.log(value); 

//     if(value === 15) {
//         break;
//     }
//     value--
// }

//  --- OR -- 

// while(value>0){
//     console.log(value); 

//     if(value === 20) {
//         value--
//         continue;
//     }

//     if (value === 15){
//         break;
//     }
//     value--
// }
