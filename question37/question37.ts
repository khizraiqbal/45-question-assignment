
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
 reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with
  a different message.*/

// Define a function to create shirts
function make_Shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}

// Creating a large shirt with the default message
make_Shirt();

// Creating a medium shirt with the default message
make_Shirt("medium");

// Creating a shirt of any size with a different message
make_Shirt("small", "life is not a bed of rose");
