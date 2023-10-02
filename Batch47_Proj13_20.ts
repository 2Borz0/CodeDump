import { TaskScope } from "vscode";

/* Ex# 13; Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements 
 about these items, such as “I would like to own a Honda motorcycle.*/ 
{const Fav_mode: Array<string> = [ " Supra MK4 ", " GTR R32 ", " Bentley GT ", "RX7 FC "];
console.log('I wil own a',Fav_mode[0]);  
console.log('I wil own a',Fav_mode[2]);
console.log('I wil own a',Fav_mode[1]);
console.log('I wil own a',Fav_mode[3]);}
 /* Ex#14; Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
 let Invitees: Array<string> = ["Malcolm X", "Emir Khattab", "Ilyas Kashmiri"];
console.log(Invitees[0], "I will be pleased if you join me for Dinner tonight")
console.log(Invitees[1],"I will be pleased if you join me for Dinner tonight")
console.log(Invitees[2],"I will be pleased if you join me for Dinner tonight")
/* Ex#15; Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/
Invitees.shift(); 
Invitees.unshift("Shamil Basayev")
console.log(Invitees[0], "I will be pleased if you join me for Dinner tonight")
/* • Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
Invitees.push("Zakir Musa");
console.log(Invitees);
/* Ex#17; Shrinking Guest List: You just found out that
 your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. */
 Invitees.pop(); Invitees.pop();
 //console.log(Invitees);
 console.log(Invitees,"Only you two Chads are in now");
 /*Ex#18; Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order. Then Print
 your array in alphabetical order without modifying the actual list */
const locations: Array<string> = ['Makkah', 'Bavarian Alps', 'Japan', ' Dagestan', 'Syria']
locations.sort(); console.log(locations);
//• Print your array in reverse alphabetical order without changing the order of the original list.
locations.reverse(); console.log(locations);
/*Ex#20; Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
 cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
 // Define an array of countries
const countries: string[] = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "India",
    "Brazil",
    "South Africa"
  ];
  
  // Print the list of countries
  console.log("List of Countries:");
  for (const country of countries) {
    console.log(country);
  }
  