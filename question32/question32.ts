/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print message that the person will 
need to enter a new username. If username has not been used, print message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/



// List of current usernames
const current_users: string[] = ["JOhn", "Jane", "AlIce", "Bob", "MIKe"];

// List of new usernames
const new_users: string[] = ["Sarah", "john", "Chris", "Mike", "ali"];

// Convert current_users to lowercase for case-insensitive comparison
const current_users_lower: string[] = current_users.map(user => user.toLowerCase());

// Loop through new_users to check for uniqueness
for (const new_user of new_users) {
    // Convert new_user to lowercase for case-insensitive comparison
    const new_user_lower: string = new_user.toLowerCase();
    
    // Check if the username is already taken
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username "${new_user}" is not available. Please choose a different one.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
}
