/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians 
by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/




function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => {
        return magician + " the Great ";
    });
}

// Array of magician's names
let magicians: string[] = ["harry potter", "tom Houdini", "jerry", "teller"];
// Adding "the Great" to each magician's name
magicians = make_great(magicians);

// Calling the function to show the magicians
show_magicians(magicians);
