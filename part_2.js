const distance = 1500;
const budget = 175;
const cost = 3;
const fe_55 = 30;
const fe_60 = 28;
const fe_75 = 23;

// Check 1: How many gallons of fuel will you need for the entire trip?
let gallons_needed = distance / 75;
console.log(`When driving at 75 miles per hour, you will need ${gallons_needed} gallons for the entire trip.`);

gallons_needed = distance / 60;
console.log(`When driving at 60 miles per hour, you will need ${gallons_needed} gallons for the entire trip.`);

gallons_needed = distance / 55;
console.log(`When driving at 55 miles per hour, you will need ${gallons_needed} gallons for the entire trip.`);


