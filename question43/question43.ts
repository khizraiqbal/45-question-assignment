/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of 
magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
added to each magician’s name.*/



function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => {
        return "the Great " + magician;
    });
}

// Array of magician's names
const originalMagicians: string[] =  ["harry potter", "tom Houdini", "jerry", "teller"];
// Creating a copy of the original array
const modifiedMagicians: string[] = make_great([...originalMagicians]); // Using spread operator to create a copy

// Calling the function to show the original magicians

show_magicians(originalMagicians);

// Calling the function to show the modified magicians

show_magicians(modifiedMagicians);

