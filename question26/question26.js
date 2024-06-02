/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
// Here we use "if" and "else" block method
var aliencolor = "green";
if (aliencolor === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Version of program runs using "if" and "else" block method
var alienColor = "orange"; // Any color other than green
if (alienColor === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
