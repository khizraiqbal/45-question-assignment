/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


// List of favourite places
let favplaces: string[] = ["Turkey", "Pakistan", "Germany", "New York", "Canada"];

// Print the array in its original order
console.log("Original order:", favplaces);

// Print the array in alphabetical order without modifying the actual list we use here [...favplaces].sort as an function
console.log("Alphabetical order:", [...favplaces].sort());

//  Array in its original order
console.log("Original order:", favplaces);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...favplaces].sort().reverse());

// Show that the array is still in its original order
console.log("Original order :", favplaces);

// Reverse the order of the list
favplaces.reverse();

// Print the array to show that its order has changed
console.log("Reversed order:", favplaces);

// Reverse the order of the list again
favplaces.reverse();

//Here the list to show it’s back to its original order
console.log("Original order ", favplaces);

// Sort the array so it’s stored in alphabetical order
favplaces.sort();

// Here the array to show that its order has been changed
console.log(" alphabetical order:", favplaces);

// Here we use function ".sort(a,b)for compare "
favplaces.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log(" reverse alphabetical order:", favplaces);



