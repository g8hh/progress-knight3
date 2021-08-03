/*
    Contains global functions related to Town features
*/

// Purpose: calculate the amount of money a player makes from their town buildings.
//
// How: iterate through town building container. If 'income' is a property, multiply
//  the income * count and add it to the total income variable. Return the total income
//  variable.
function updateRawTownIncome() {
    console.log("testing updateRawTownIncome function. We are inside the function now.");
    var totalIncome = 0;
    console.log("totalIncome: " + totalIncome);
    console.log("Starting for loop...");
    for(building in o_townBuildingsContainer) {
        console.log("key: " + building);
        //building represents the key, so we use it to get a reference to the actual object
        var o_building = o_townBuildingsContainer[building];
        console.log("value: " + o_building);
        if('income' in o_building) {
            console.log("Income is detected in " + o_building.name + " building.");
            totalIncome += (o_building.getIncome());
            console.log("Income from " + o_building.name + " added to total. New total income: " + totalIncome);
        }
    }
    console.log("For loop complete. totalIncome = " + totalIncome);
    return totalIncome;
}