/*Ex#31; create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. If a username has not been used, 
print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

// Function to check if a username is already in use
 function isUserNameTaken(username: string, currentUsers: string[]): Boolean {
    const lowerUserName = username.toLowerCase();
    return currentUsers.some((user) => user.toLowerCase() === lowerUserName );
 }
// List of current usernames
const Current_Users:string[] = ['Bob','kyle','Tim','Eve','John' ];
const New_users: string[] = ['Charles','Chuck','Jimmy','Howard','Eve'];
for (const New_user of New_users ) {
   if ( isUserNameTaken(New_user, Current_Users)) {
      console.log(`Username ${New_user} is taken`)
    }
     else {
         console.log(`Username ${New_user} is available`)
      }
   }

/* Ex#33; Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th,
 except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */ 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of numbers) {
  let ordinal: string;

  if (num === 1) {
    ordinal = "1st";
  } else if (num === 2) {
    ordinal = "2nd";
  } else if (num === 3) {
    ordinal = "3rd";
  } else {
    ordinal = `${num}th`;
  }

  console.log(ordinal);
}

/*Ex#34; Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a 
for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing 
just the name of the pizza. For each pizza you should have one line of output containing a simple statement like 
I like pepperoni pizza.*/
 const fav_pizza = ['pepperoni','NYC style','chicken Tikka']
 for ( let i = 0; i < fav_pizza.length; i ++ ) {
  console.log(`I like ${fav_pizza[i]} pizza!`)
 }

 /*Ex#35; Write a function called make_shirt() that accepts a size and the text of a message that should
  be printed on the shirt. The function should print a sentence summarizing the size of the shirt and 
  the message printed on it. Call the function.*/
 { function make_shirt(size:string , message: string): void {
    console.log(`The shirt size is ${size} with the message  ${message}`)
  }
  make_shirt('large','I love this shirt') }
  /* Ex#37; Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
   Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message */
  
   function make_shirt(size:string = 'large' , message: string= 'ily typescript'): void {
    console.log(`The shirt size is ${size} with the message ${message}`)
  }
  make_shirt()
  
  /* Ex#38; Write a function called describe_city() that accepts the name of a city and its country.
   The function should print a simple sentence, such as Karachi is in Pakistan. 
   Give the parameter for the country a default value. Call your function for three different cities,
    at least one of which is not in the default country.
  */
  function describe_city(name: string, country:string = 'Pakistan'): void {
    console.log(`${name} is in ${country}`)
  }
  describe_city('Lahore')
  describe_city('islamabad')
  describe_city('Tokyo')

/*Ex#39; Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this: "Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
  function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("New York", "USA"));
  console.log(city_country("Tokyo", "Japan"));

  /* Ex#40; Write a function called make_album() that builds a Object describing a music album. 
  The function should take in an artist name and an album title, and it should return a Object 
  containing these two pieces of information. Use the function to make three dictionaries representing 
  different albums. Print each return value to show that Objects are storing the album information correctly.
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
  If the calling line includes a value for the number of tracks, add that value to the album’s Object.
  Make at least one new function call that includes the number of tracks on an album */
 
   function make_album(artist: string, albumTitle: string, numberOfTracks:number): Record<string,any> {
    const album = {
      Artist: artist,
    Title: albumTitle,
    Tracks: numberOfTracks,
     }
     if (numberOfTracks !== undefined) {
       album.numberOfTracks = numberOfTracks;
     }
     return album;
  }
  const album1 = make_album('Taylor Swift', '1989', 11)
  const album2 = make_album('Taylor Swift', 'Folklore', 8)
  const album3 = make_album('Abdullah Qureshi', 'Chan Mahi',1)
  const album4 = make_album('Abdullah Qureshi', 'Sajna',1)

  console.log(album1);
  console.log(album2);
  console.log(album3);
  console.log(album4);

  /*Ex#41; Make a array of magician’s names. Pass the array to a function called show_magicians(), 
  which prints the name of each magician in the array.*/

  function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  show_magicians(magicianNames);
 
  /*Ex#42; Write a function that accepts a array of items a person wants on a sandwich.
   The function should have one parameter that collects as many items as the function call provides,
    and it should print a summary of the sandwich that is being ordered. Call the function three times, 
    using a different number of arguments each time.*/
  
  function orderSandwich(...items: string[]): void {
    if (items.length === 0) {
      console.log("You haven't ordered anything for your sandwich.");
    } else {
      console.log("You have ordered a sandwich with the following items:");
      for (const item of items) {
        console.log(`- ${item}`);
      }
    }
  }
  
  // Call the function with different numbers of arguments
  orderSandwich("Bread", "Ham", "Cheese", "Lettuce");
  orderSandwich("Bread", "Turkey", "Tomato");
  orderSandwich();
  
  /*Ex#45; Write a function that stores information about a car in a Object. The function should always receive
   a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
   Call the function with the required information and two other name-value pairs, such as a color or an optional 
   feature. Print the Object that’s returned to make sure all the information was stored correctly. */
   
   function createCar( manufacturer:string, name:string, model:number, color:string, ...options: Record<string, any>[]): any {
    
    const car_info: Record<string, any> = {
      manufacturer,
      name,
      model,
    };
    
    options.forEach((option) => {
      const keys = Object.keys(option);
    keys.forEach((key) => {
        car_info[key] = option[key];
      });
    });
  
    return car_info;
  }
  
const car = createCar('Toyota', 'Camry', 1999, 'black',{
  sunroof: true, 
  rims: '22 inches '
  
});

console.log(car);
  