/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals
in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about
each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have
 in common. You could print a sentence such as Any of these animals would make a great pet!*/
// Define a list of animals
var animals = ["Dog", "Cat", "Rabbit"];
// Print out the name of each animal using a for loop
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Dog":
            console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
            break;
        case "Cat":
            console.log("A ".concat(animal.toLowerCase(), " can be an independent companion."));
            break;
        case "Rabbit":
            console.log("A ".concat(animal.toLowerCase(), " is a cute and cuddly friend."));
            break;
    }
}
// Print what these animals have in common
console.log("These animals would be a great pet!");
