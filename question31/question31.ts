/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/


let usernames: string[] = [];

// Add some users to the array
//  usernames = ["Admin", "Eric", "Ahmed", "Ahsan", "Babar"];(if we uncomment this like so then else situation will run)

// Check if the array is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and greet each user
    for (const username of usernames) {
        if (username === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}













