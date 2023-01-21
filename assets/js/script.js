// To implement
    // Display current day at top of page when user opens planner


// Initialise javascript variables
var currentDay = moment().format("dddd D MMMM");
var timeblockContainer = $(".container");


var setDate = function () {
    // Set text of current day to moment value
    $("#currentDay").text(currentDay);      
}
setDate();
    // Present individual timeblocks for 9/5 

var createTimeblocks = function () { 

    // Create array to hold hours data 
    var timeOfDay = ["9","10","11","12","13","14","15","16","17"];

    // Create table to hold all the rows of timeblocks
    var newTable = $("<table>");

    // Append table element to time block container
    timeblockContainer.append(newTable);

    // Create table description
    var timeblockDesc = $("<td>");
    // Append to table element
    newTable.append(timeblockDesc);

    // For loop to run create row for each hour 
    for (var i = 0; i < timeOfDay.length; i++){
        // Create table row
        var tableRow = $("<tr>");
   
        // Set current time variable to hold hour format of number in timeOfDay array
        var currentTime = moment(timeOfDay[i]).format("H"); // Check on format of am numeration

        // Set text to current time
        tableRow.text(currentTime);
        tableRow.attr("class","row");
        // Append table row to description block
        timeblockDesc.append(tableRow);
        console.log("table row added");





    }


}

createTimeblocks();


    // Color-code timeblock based on current time - 
        // e.g grey for past, red for current & green for future

    // Allow user to enter event when click on timeblock
     
    // Save event in local storage when save button clicked on individual timeblock

    // Persist events between refreshes of a page
