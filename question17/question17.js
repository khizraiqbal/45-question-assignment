// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// Here we start program with the end of question16 
var guest = ['Salman', 'Taha', 'Ahmed', 'Hamza', 'Areeb', 'Ahsan', 'Iqbal', 'Wasiq'];
// Hre we print message 
console.log("Awfully Sorry because of table won't arrive in time. I can only invite two people");
// Here we use "while function" for removing all guest except 2 guest and display them message for not inviting
while (guest.length > 2) {
    var removedguest = guest.pop();
    console.log("Sorry Dear ".concat(removedguest, " I can't invite you to dinner "));
}
// Here we use "foreach function"  for printing message to guest who is invited
guest.forEach(function (guestinvite) {
    console.log("Dear ".concat(guestinvite, " you are invited for dinner"));
});
// Here empty block bracket "[]" to have empty list
guest = [];
console.log(guest);
