const distance = 1500;
const budget = 175;
const fuel_cost = 3;
const fe_55 = 30;
const fe_60 = 28;
const fe_75 = 23;

// Check 1: How many gallons of fuel will you need for the entire trip?

let gallons_needed1 = distance / fe_75;
console.log(`When driving at 75 miles per hour, you will need ${gallons_needed1} gallons for the entire trip.`);

let gallons_needed2 = distance / fe_60;
console.log(`When driving at 60 miles per hour, you will need ${gallons_needed2} gallons for the entire trip.`);

let gallons_needed3 = distance / fe_55;
console.log(`When driving at 55 miles per hour, you will need ${gallons_needed3} gallons for the entire trip.`);

//Check 2 Will your budget be enough for the expense?

let budget_needed1 = gallons_needed1 * fuel_cost;
console.log(`When traveling at 75 miles per hour you will need ${budget_needed1} in your budget.`);

let budget_needed2 = gallons_needed2 * fuel_cost;
console.log(`When traveling at 60 miles per hour you will need ${budget_needed2} in your budget.`);

let budget_needed3 = gallons_needed3 * fuel_cost;
console.log(`When traveling at 55 miles per hour you will need ${budget_needed3} in your budget.`);


//Check 3: How long will the trip take, in hours?
let time1 = distance / 75;
console.log(`When traveling at an average of 75 miles per hour, the trip will take ${time1} hours.`);

let time2 = distance / 60;
console.log(`When traveling at an average of 60 miles per hour, the trip will take ${time2} hours.`);

let time3 = distance / 55;
console.log(`When travelling at an average of 55 miles per hour, the trip will take ${time3} hours.`);

//Part 3 Check 2 Done with switch statement
switch(true){
    case(budget > budget_needed1):
        console.log(`The fastest speed you are able to travel at is 75 miles per hour. This will take ${time1} hours.`);
        break;
    case(budget > budget_needed2):
        console.log(`The fastest speed you are able to travel at is 60 miles per hour. This will take ${time2} hours.`);
        break;

    case(budget > budget_needed3):
        console.log(`The fastest speed you are able to travel at is 55 miles per hour. This will take ${time3} hours.`);
        break;
    default:
        console.log("It seems you don't have enough money for the entire trip. Sadge.");
}