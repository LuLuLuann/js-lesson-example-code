let str1 = "Hello";
console.log(str1.length);

let str2 = "World!";

let message = str1 + " " + str2;
console.log(message);
console.log(message.length);

console.log(str1.length);

let myVar = "Hello JS!".toLowerCase();
// Whenever you use " " or ' ' you can use the ___.functions

let html = "hello html";
console.log(html.toUpperCase());

let email = "user1@example.com";

let providedEmail = "User1@example.com";

if (email === providedEmail) {
    console.log(`Hello ${email}`); 
} else { 
    console.log("Hello random user");
}
// this would log "Hello random user"

if (email.toLowerCase === providedEmail) {
    console.log(`Hello ${email}`); 
} else { 
    console.log("Hello random user");
}
// This would log "Hello ${email}"

if (email.toLowerCase().trim() === providedEmail.toLowerCase().trim()) {
    console.log(`Hello ${email}`); 
} else { 
    console.log("Hello random user");
}
// .trim() will take away any trailing spaces if the user accidentally typed spaces

// Other instance methods: 
// .replace()
// .indexOf()
// CharAt()