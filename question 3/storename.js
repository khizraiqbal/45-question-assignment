//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_Name = "miss khizra iqbal";
// In Lower Case
console.log(person_Name.toLowerCase());
// In upper case
console.log(person_Name.toUpperCase());
// In title case
/*/\b\w/g: This is a regular expression pattern. Here's what it means:

\b: This is a word boundary anchor. It matches a position where a word starts or ends.
\w: This is a shorthand character class that matches any word character (letters, digits, or underscores).
g: This is a flag that makes the regular expression global, meaning it will match all occurrences of the pattern
in the string, not just the first one.
c => c.toUpperCase(): This is an arrow function used as the replacement function for replace().
It takes each matched character (c) and returns it in uppercase using the toUpperCase() method.*/
console.log(person_Name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
