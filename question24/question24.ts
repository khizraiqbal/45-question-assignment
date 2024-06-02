/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

//Tests for equality and inequality with strings

// True
let string1: string = "hello";
let string2: string = "hello";
console.log(string1 === string2);

// False
let string3: string = "hello";
let string4: string = "world";
console.log(string3 === string4);

// Tests using the lower case function
/*In this code:
- We have two pairs of strings (string1 and string2, string3 and string4).
- We use the "toLowerCase()" function to convert both strings to lowercase.
- Then, we compare them for equality using the `===` operator.
- The first pair should return `true` because both strings are converted to lowercase "hello".
- The second pair should return `false` because "HELLO" converted to lowercase is not equal to "world" converted to lowercase.
*/

// True
let string5: string = "HELLO";
let string6: string = "hello";
console.log(string5.toLowerCase() === string6.toLowerCase());

// False
let string7: string = "HELLO";
let string8: string = "world";
console.log(string7.toLowerCase() === string8.toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
// Equality and inequality
let num1: number = 10;
let num2: number = 5;
console.log(num1 === num2);
console.log(num1 !== num2);

// Greater than and less than
console.log(num1 > num2);
console.log(num1 < num2);

// Greater than or equal to and less than or equal to
console.log(num1 >= num2);
console.log(num1 <= num2);




//  Tests using "and" and "or" operators
// True with "and" operator
let x: number = 5;
console.log(x > 0 && x < 10);

// False with "and" operator
let y: number = 15;
console.log(y > 0 && y < 10);

// True with "or" operator
let z: number = -5;
console.log(z < 0 || z < -10);

// False with "or" operator
let w: number = 8;
console.log(w > 10 || w < 0);
/* The "and" operator (&&) returns true only if both conditions it connects are true.
* The "or" operator (||) returns true if at least one of the conditions it connects is true.
* Depending on the values of x, y, z, and w, the expressions inside the console.log statements will evaluate
  to either true or false*/



// Test whether an item is in a array
// True
let array1: number[] = [1, 2, 3, 4, 5];
console.log(array1.includes(3));

// False
console.log(array1.includes(6));

/*We have an array array1 containing some numbers.
We use the includes() method to check if 3 is present in the array. If it is, includes() returns true; otherwise, it 
returns false.Since 3 is present in the array, the first console.log() statement will print true.Similarly, we check 
is 6 is present in the array. Since it's not, the second console.log() statement will print false.
*/


// Test whether an item is not in a array
// True
let array2: number[] = [1, 2, 3, 4, 5];
console.log(!array2.includes(6));

// False
console.log(!array2.includes(3));

/* We have an array array1 containing some numbers.
We use the includes() method to check if 6 is present in the array. Then, we negate the result using the ! operator.
Since 6 is not present in the array, the result of !array1.includes(6) will be true.
Similarly, we check if 3 is not present in the array. Since 3 is present in the array, the result of !array1.includes(3) 
will be false.*/ 



