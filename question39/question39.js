/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should
return a string formatted like this:

"Lahore, Pakistan"*/
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Example usage
var ans1 = city_country("Lahore", "Pakistan");
console.log(ans1);
var ans2 = city_country("Madina", "Saudia Arabia");
console.log(ans2);
var ans3 = city_country("Paris", "London");
console.log(ans3);
