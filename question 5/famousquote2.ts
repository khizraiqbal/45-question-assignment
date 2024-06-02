// Famous quote2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.

let quotestring : string = "The greatest of richness is the richness of the soul." ;
let famous_personstring:string = "Prophet Muhammad (peace be upon him)";
let messagestring: string = `${famous_personstring}said,"${quotestring}"`;
 
console.log(messagestring);


