console.log("Hello" + "World"); // outputs: Hello World

console.log("Hello" + " " + "World");

console.log("This is" + " a String"); // outputs: This is a String

console.log("The number is " + 5); // outputs: The number is 5
console.log("Hello" - " World"); // Invalid, cannot use -

let message = "Hello JS!"

let longMessage = "Hello" + " " + "World!" + "!!!" + message;

console.log(longMessage);

console.log("Error in line " + 5);

// NaN ---> Not a number
console.log("Hello" - "35");



//String access
const name = "Inigo Montoya";

// JavaScript is a zero-based language. (It starts counting from 0). 
//Will log the character. 0 is the first character
// In code we start counting at 0, not at 1. 
// So the first letter is always 0. So in dog, dog[0] is 'd'
console.log(name[2]); // i (the 3rd character)
console.log("Hello World"[4]); // o  (the 5th character)

// [ ] accessed the specific character. So in the word 'cat' we can access each individual letter by saying cat[1], which would be 'a'

//We want to find the length of a string
console.log(userName.length); // length 13

//Adding a . after a variable will open up all the properties we have available to use on that variable. Those can do math, they can mutate, or compile. There are many different methods.

//[0] gives you the first character bc it counts from 0
console.log(userName[0]); 
console.log("Hello World!"[6]); //w


//We cannot override a string. Strings are immutable. You cannot change them.
const name = "Inigo Montoya";

name[2] = "X"; // will not override

console.log(name[2]); // i

//STRING COMPARISON

const a = "a";
const b = "b";

//Alphabet goes according to their position in the alphabet. They take on the value of their position in the alphabet.
console.log(a < b); // true

console.log("Hey" === "Hey"); // true
console.log("hey" === "hey"); // true

console.log("Hey" == "hey"); // false

//lowercase is a higher number than uppercase letters
console.log("Hey" < "hey"); // true
console.log("hey" < "Hey"); // false

let password = "Password123$"; // on the database
let userPassword = prompt("Enter your password");

if (password === userPassword){
    console.log("Welcome"); 
} else {
    console.lof("Wrong password!"); 
}

//LONG LITERAL STRINGS

//Your code may include strings that are very long. Best practice is to split these long strings into more manageable chunks so that they do not continue endlessly within your code editor. While most code editors will wrap long lines automatically, you may also want to specifically break the string into specific lines within the source code.
//So how do we do this without affecting the actual contents of the string?
//First, we can use the + operator to concatenate multiple strings together across lines:

const frost =
	"Nature’s first green is gold, " +
	"Her hardest hue to hold. " +
	"Her early leaf’s a flower; " +
	"But only so an hour. " +
	"Then leaf subsides to leaf. " +
	"So Eden sank to grief, " +
	"So dawn goes down to day. " +
	"Nothing gold can stay. ";

console.log(frost);

// OR As an alternative that is slightly cleaner, we can use the backslash character (\) at the end of each line to indicate that the string continues onto the following line. 
// There cannot be any characters other then a line break after the backslash, or it will not work. This includes whitespace characters like space and tab, which makes this method quite particular. Anything written after " \ " will break the syntax. 

const frost =
	"Nature’s first green is gold, \
Her hardest hue to hold. \
Her early leaf’s a flower; \
But only so an hour. \
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.";

console.log(frost);

//Both of these methods result in identical strings: 
// Nature’s first green is gold, Her hardest hue to hold. Her early leaf’s a flower; But only so an hour. Then leaf subsides to leaf. So Eden sank to grief, So dawn goes down to day. Nothing gold can stay.

// The backslash is referred to as an escape character, and can be further combined with other specific characters to create escape sequences that provide special behavior within strings.

// ESCAPE SEQUENCES
// when you put something after the " \ " it will create a different escape sequence depending on the character used after it. 
//Most are good to know - but you wont use them too frequently.

const msg = "Let's learn JS!";
//Example
// " /' " is like saying ignore this apostrophe because it is regular text 
const msg = 'Let\'s learn JS!';
const msg = "Let's learn JS!";
console.log(msg);

const frost =
	"Nature’s first green is gold, \
Her hardest hue to hold. \t
// " \t " will insert 4 spaces - TAB 
Her early leaf’s a flower; \
But only so an hour. \n; 
// " \n "= new line
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.";

console.log(frost);

console.log('They said, "this string does not need an escape!"');
// They said, "this string does not need an escape!"

console.log('They said, "this string doesn\'t need an escape," but that isn\'t true.');
// They said, "this string doesn't need an escape," but that isn't true.

Here is a list of escape sequences that can be used to encode special characters:**Escape sequenceUnicode code point`\0`null character (U+0000 NULL)`\'`single quote (U+0027 APOSTROPHE)`\"`double quote (U+0022 QUOTATION MARK)`\\`backslash (U+005C REVERSE SOLIDUS)`\n`newline (U+000A LINE FEED; LF)`\r`carriage return (U+000D CARRIAGE RETURN; CR)`\v`vertical tab (U+000B LINE TABULATION)`\t`tab (U+0009 CHARACTER TABULATION)`\b`backspace (U+0008 BACKSPACE)`\f`form feed (U+000C FORM FEED)`\uXXXX` …where `XXXX` is exactly 4 hex digits in the range `0000``–FFFF`; e.g., `\u000A` is the same as `\n` (LINE FEED); `\u0021` is `!`. | Unicode code point between `U+0000` and `U+FFFF` (the Unicode Basic Multilingual Plane)`\u{X}`…`\u{XXXXXX}` …where `X``…XXXXXX` is 1–6 hex digits in the range `0`–`10FFFF`; e.g., `\u{A}` is the same as `\n` (LINE FEED); `\u{21}` is `!`. | Unicode code point between `U+0000` and `U+10FFFF` (the entirety of Unicode)`\xXX` …where `XX` is exactly 2 hex digits in the range `00`–`FF`; e.g., `\x0A` is the same as `\n` (LINE FEED); `\x21` is `!`.Unicode code point between `U+0000` and `U+00FF` (the Basic Latin and Latin-1 Supplement blocks; equivalent to ISO-8859-1)**
Unicode characters are many, and including them all in this lesson would be folly. If you would like to learn more about Unicode, UTF-8, and UTF-16, start with a visit to the [WikiPedia article on Unicode](https://en.wikipedia.org/wiki/Unicode).
Since strings can be definied with either single or double quotes, you will traditionally see the string created with whichever type of quotes it does not need to use, in order to prevent the need for escaping quotes. For example:

`console.log('They said, "this string does not need an escape!"');
// They said, "this string does not need an escape!"`
By using single quotes to create the string, we allow the use of double quotes within (and vice versa). If we needed to use both types of quotes within the string, however, we would need to use the escape sequences as necessary:

`console.log('They said, "this string doesn\'t need an escape," but that isn\'t true.');
// They said, "this string doesn't need an escape," but that isn't true.`
//Using these escape sequences, we could format the Robert Frost poem above using the newline sequence `\n`:

`const frost =
	"Nature’s first green is gold, \n\
Her hardest hue to hold. \n\
Her early leaf’s a flower; \n\
But only so an hour. \n\
Then leaf subsides to leaf. \n\
So Eden sank to grief, \n\
So dawn goes down to day. \n\
Nothing gold can stay.";

console.log(frost);`
//Now, the poem prints line by line as it should, rather than as one long line of text.


// TEMPLATE LITERALS or TEMPLATE STRINGS

// " ` " Backticks in the front of text and at the end of text will connect everything rather than using all the escape characters. 

let user2 = "Max Pain"; 
// ${ } is read as JS expressions in the string. Any JS Expression can go inside the curly brackets. 
console.log(`Welcome ${user2}: ${3+3}`);

//Considered bad practice to use backticks for a regular string. Only use backticks ( ` ) if you are inserting values or using JS expressions. 

