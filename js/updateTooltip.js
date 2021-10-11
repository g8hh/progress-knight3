function updateTooltip(tooltipId) {
    //grab the text content from the tooltip span
    //search the string for 'base cost: 1,000,000'
    //replace '1,000,000' with the actual current cost
    //set the element's text content as the new string

    //console.log("Print all function args: " + arguments[0] + arguments[1]);
    console.log("Tooltip ID: " + tooltipId);
    var tooltipElement = document.querySelector("#" + tooltipId);

    console.log("Grabbed the tooltip element whose text we're updating!");
    console.log(tooltipElement);

    console.log("Here's the text content: ");
    console.log(tooltipElement.textContent);
    console.log("Typeof text content: " + typeof tooltipElement.textContent);

}