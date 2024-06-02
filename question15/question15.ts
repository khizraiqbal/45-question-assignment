/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/



// list of guest we are inviting and the changes of list are also here

let guest: string[] = ["Khizra", "Ahmed","Areeb","Ahsan","Iqbal"]
let notattend: string = "Khizra"
let newguest:string= "Taha";

console.log(notattend +" " +`Can't attend the dinner`);

// Here we use indexof for print list with changes
guest [guest.indexOf(notattend)] = newguest;

console.log(guest);


// Here we use again map method for inviting each person
guest.map((items) => console.log(`Dear, ${items} I like to invite you for dinner`))




