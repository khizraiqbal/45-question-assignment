/*magicians: Make a array of magicians names. Pass the array to a function called show_magicians(), which prints the name of 
each magician in the array.*/


function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));
    });
}

const magicianNames: string[] = ["harry potter", "tom Houdini", "jerry", "teller"];
show_magicians(magicianNames);
