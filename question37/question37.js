/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
 reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with
  a different message.*/
// Define a function to create shirts
function makeShirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(message));
}
// Creating a large shirt with the default message
makeShirt();
// Creating a medium shirt with the default message
makeShirt("medium");
// Creating a shirt of any size with a different message
makeShirt("small", "life is not a bed of rose");
