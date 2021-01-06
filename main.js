console.log(`21 01 06 JS Higher Order Array Methods Practice`);

// ForEach
// Prompt in the browser to add a language to an array of language until q is entered. 
let userLangs = [];
let userInput = prompt("enter a language");
while(userInput != "q"){
    userLangs.push(userInput);
    userInput = prompt("enter a language or q to quit");
}
// console.log(userLangs);
// Once q is entered iterate through all language in the language array using a for each.
userLangs.forEach(lang => console.log(lang));

// Reduce
// Create an array of purchase amounts made over a week using the values : 23.95, 15.14, 90.78, 5.78, 4.90, 7.99, 9.01
let weeklySpending = [ 23.95, 15.14, 90.78, 5.78, 4.90, 7.99, 9.01];

// Find the sum of all spending using reduce to iterate over the array of purchase amounts, adding the current value to the running total on each iteration. 
let sum = weeklySpending.reduce((currentTotal, currentValue) => currentTotal + currentValue);

// Output the sum in the message : "Your weekly sum is : $SUM"
console.log(`Your weekly sum is : $${sum}`);

// Map
// Define an array of original prices with the values 10, 56, 78, 14
let originalPrices = [10, 56, 78, 14];
// Create a new array of discounted prices using map to iterate over the array of prices discounting each one 50%. 
let discountedPrices = originalPrices.map(price => price/2);
// Output the new prices in the console using a for each.
discountedPrices.forEach(price => console.log(`$${price}`));

// Filter
// Define an array of employee ages using the values 37, 35, 63, 59, 40, 67, 59
let employeeAges = [37, 35, 63, 59, 40, 67, 59];

// Create a new array of employees eligible for retirement using filter to iterate over the array of ages and only return ages 62 or older.
let  retirementAges = employeeAges.filter(age => age >= 62);

// Output the number of employees eligible for retirement in the message : "There are NUMBER number of employees applicable for retirement with benefits"
console.log(`There are ${retirementAges.length} number of employees applicable for retirement with benefits`);