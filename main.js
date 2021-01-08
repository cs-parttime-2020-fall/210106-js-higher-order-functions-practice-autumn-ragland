console.log(`21 01 06 JS Higher Order Array Methods Practice`);

// ForEach
// Prompt in the browser to add a language to an array of language until q is entered. 
let userLangs = [];
let userInput = prompt("Enter a language");
while(userInput != "q"){
    userLangs.push(userInput);
    userInput = prompt("Enter another language");
}
// Once q is entered iterate through all language in the language array using a for each.
userLangs.forEach(lang => console.log(lang));


// Reduce
// Create an array of purchase amounts made over a week using the values : 23.95, 15.14, 90.78, 5.78, 4.90, 7.99, 9.01
let spending = [23.95, 15.14, 90.78, 5.78, 4.90, 7.99, 9.01]
// Find the sum of all spending using reduce to iterate over the array of purchase amounts, adding the current value to the running total on each iteration. 
let sum = spending.reduce((total, charge) => total + charge);
// Output the sum in the message : "Your weekly sum is : $SUM"
console.log(`Your weekly sum is : $${sum}`);

// Map
// Define an array of original prices with the values 10, 56, 78, 14
let prices = [10, 56, 78, 14];
// Create a new array of discounted prices using map to iterate over the array of prices discounting each one 50%. 
let discounted = prices.map(price => price/2);
// Output the new prices in the console using a for each.
discounted.forEach(discount => console.log(discount));

// Filter
// Define an array of employee ages using the values 37, 35, 63, 59, 40, 67, 59
let employees = [37, 35, 63, 59, 40, 67, 59];
// Create a new array of employees eligible for retirement using filter to iterate over the array of ages and only return ages 62 or older.
let retirement = employees.filter(employee => employee >= 62);
// Output the number of employees eligible for retirement in the message : "There are NUMBER number of employees applicable for retirement with benefits"
console.log(`There are ${retirement.length} number of employees applicable for retirement with benefits`);
