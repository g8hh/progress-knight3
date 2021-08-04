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

/*
*   Description: saves select building object properties into a saveObject
*       and writes that saveObject into gameData.townData. This function is
*       called right before gameData is saved to localStorage.
*/
function saveTownState() {
    console.log("saving town state...");
    for(building in o_townBuildingsContainer) {
        console.log("key: " + building);
        var o_building = o_townBuildingsContainer[building];
        console.log("value: " + o_building);
        var saveObject = {
            name: o_building.name,
            count: o_building.count,
            costOfNextBuilding: o_building.costOfNextBuilding,
        };
        if(saveObject !== undefined) {
            console.log("This is the save object we created: " + saveObject);
            gameData.townData[saveObject.name] = saveObject;
        }
    }
}

function loadTownState() {
    for(building in o_townBuildingsContainer) {
        var o_building = o_townBuildingsContainer[building];
        if(o_building.name in gameData.townData) {
            var savedBuilding = gameData.townData[o_building.name];
            o_building.count = savedBuilding.count;
            o_building.costOfNextBuilding = savedBuilding.costOfNextBuilding;
        }
    }
}