/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.*/
// Here is the list of favourite transportation
var favtransport = ["Honda", "Civics", "City", "Mehran"];
// Here we use "map" command for print series of statements
favtransport.map(function (items) { return console.log("I like to go on drive in ".concat(items)); });
