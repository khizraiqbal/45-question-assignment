"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check
for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your
 array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of favorite fruits
const favorite_fruits = ["mango", "apple", "strawberry"];
// Independent if statements to check for certain fruits
if (favorite_fruits.includes("banana")) {
    console.log("I really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("I really like apples!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("I really like strawberries!");
}
if (favorite_fruits.includes("orange")) {
    console.log("I really like oranges!");
}
if (favorite_fruits.includes("mango")) {
    console.log("I really like mangoes!");
}
