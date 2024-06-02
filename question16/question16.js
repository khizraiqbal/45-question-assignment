// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
// invite to dinner.
// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that 
// you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
//  Print a new set of invitation messages, one for each person in your list.



// Here we start from the end of question 15
var guest = ["Taha", "Ahmed", "Areeb", "Ahsan", "Iqbal"];
var begguest = "Salman";
var endguest = "Wasiq";
// Here we use unshift command for add data in start if array
guest.unshift(begguest);
console.log(guest);
// Here we use splice method for adding middle guest name. Splice method also used for (add, remove,replace)
guest.splice(3, 0, "Hamza");
console.log(guest);
// Here we use push method for adding data in the end of array
guest.push(endguest);
console.log(guest);
