/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three 
people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/


// list of guest we are inviting
let guest: string[] = ["Ahmed","Areeb","Ahsan","Iqbal"]

// Here we use again map method for inviting each person
guest.map((items) => console.log(`Dear, ${items} I like to invite you for dinner`))




