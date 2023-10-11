/*Ex Alien Colors #1: Imagine an alien was just shot down in a game. 
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that 
the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. 
(The version that fails will have no output.)*/

// Version that passes the if test
const alien_color_pass = 'green';

if (alien_color_pass === 'green') {
  console.log("Player just earned 5 points.");
}

// Version that fails the if test
const alien_color_fail = 'red';

if (alien_color_fail === 'red') {
  console.log("Player just lost 5 points."); 
}
/*Ex#26; Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block. */
const a_color = 'green'
if(a_color === 'green') {
    console.log("Player just earned 5 points.");
} else {
console.log("Player just earned 10 points") }
/* Ex#28; Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for 
the variable age, and then:*/
const person_age = 20
//• If the person is less than 2 years old, print a message that the person is a baby.
if (person_age >= 2 ) {
  console.log("Person is a baby.");
}
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (person_age >= 4 ) {
  console.log("Person is a toddler.");
}
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (person_age >= 13 ) {
  console.log("Person is a kid.");
}
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if ( person_age >= 20 ) {
  console.log("Person is a teenager.");
}
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (person_age >= 65 ) {
  console.log("Person is an adult.");
}
//• If the person is age 65 or older, print a message that the person is an elder. 
if ( person_age <= 65 ) {
  console.log("Person is an elder.");
}
/*Ex#29; Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
that check for certain fruits in your array.*/
//• Make a array of your three favorite fruits and call it favorite_fruits.
const favorite_fruits:string[] = ['Grapes', 'Mango','Pomegranate','Guava'];

/*• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
if (favorite_fruits.includes('Grapes')) {
  console.log("You really like grapes!");
}
if (favorite_fruits.includes('Guava')) {
  console.log("You really like guava!");
}
if ( favorite_fruits.includes('Pomegranate')) {
  console.log("You really like pomegranate!");
}
if ( favorite_fruits.includes('Mango')) {
  console.log("You really like mango!");
}
/* Ex#30; Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:*/
const username:string[] = ['Admin', ' Eric', 'Tim', 'Bob','Jay'];

 //• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
 for (let i = 0; i < username.length; i++) {
  if (username[i] === 'Admin') {
    console.log("Hello Admin!, would you like to see a status report? ");
  } 
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
else {
  console.log("Hello " + username[i] + "! Thanksyou for logging in again");
}
 }