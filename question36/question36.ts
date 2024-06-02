/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed 
on the shirt. The function should print a sentence summarizing the size of 
the shirt and the message printed on it. Call the function.*/


function make_Shirt(size: string, message: string): void {
    console.log(`A ${size} sized shirt will be printed with the message: '${message}'`);
}

// Call the function
make_Shirt("short", "Hello, World!");
make_Shirt("medium","just break the ice man");
make_Shirt("large" , "quitting  is not the solution");