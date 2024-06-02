/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', '
yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
var aliencolor1 = "green";
if (aliencolor1 === "green") {
    console.log("Congratulations! You just earned 5 points.");
}
var aliencolor2 = "red";
if (aliencolor2 === "green") {
    console.log("no output");
}
/*
In the passing version, the condition alien_color === 'green' evaluates to true because the alien_color variable
assigned the value 'green', so the message is printed. In the failing version, the condition evaluates to false
because the alien_color variable is assigned the value 'red', so there's no output.*/
