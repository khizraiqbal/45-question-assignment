/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, 
except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.*/


/* A function ordinalSuffix that takes a number as input and returns its ordinal representation.
 Then, it creates an array numbers containing integers from 1 to 9. Finally, it loops through each number in the array using 
 forEach and prints its ordinal representation using the ordinalSuffix function.*/


 const ordinalSuffix = (num: number): string => {
    if (num === 1) {
        return "1st";
    } else if (num === 2) {
        return "2nd";
    } else if (num === 3) {
        return "3rd";
    } else {
        return num + "th";
    }
};

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((num) => {
    console.log(ordinalSuffix(num));
});

