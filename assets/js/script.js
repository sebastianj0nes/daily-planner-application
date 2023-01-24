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
    var timeOfDay = [9,10,11,12,13,14,15,16,17];

    // Create table to hold all the rows of timeblocks
    var newTable = $("<table>");
    // Add styling to make table 100% width
    newTable.attr("style","width:100%");

    // Append table element to time block container
    timeblockContainer.append(newTable);

    // For loop to run create row for each hour 
    for (var i = 0; i < timeOfDay.length; i++){

        // TABLE ROW

        // Create table row
        var timeblockDesc = $("<tr>");
        // Append to table element
        newTable.append(timeblockDesc);

        // TABLE DESC (time)

        // Create table description for time frame
        var tableRow = $("<td>");
        // Add styling to make table 15% width
        tableRow.attr("style","width:15%");

        // Set current time variable to hold hour format of number in timeOfDay array
        var currentTime = moment(timeOfDay[i],"Ha").format("ha");
        console.log(currentTime);
        // Set text to current time
        tableRow.text(currentTime);
        tableRow.attr("class","row");
        // Append table row to description block
        timeblockDesc.append(tableRow);


        // TABLE DESC (user input)
        // Add rows into table
        var tableRow1 = $("<td>");
        tableRow1.attr("style","width:70%");

        // Add colour pallettes to past/present
            // Use stringify to convert moment and time into comparable values
        if (JSON.stringify(currentTime) < JSON.stringify(moment().format("ha"))){
            tableRow1.addClass("past");
        }   else if (JSON.stringify(currentTime) > JSON.stringify(moment().format("ha"))){
            tableRow1.addClass("future");
        } else {
            tableRow1.addClass("present");
        }

        tableRow1.text("This is a test");
        timeblockDesc.append(tableRow1);



        // // TABLE DESC (save button)
        // // Add rows into table
        var tableRow2 = $("<td>");
        tableRow2.attr("style","width:15%");

        // Create button to save 
        var saveButton = $("<button>");
        saveButton.attr("class","saveBtn");
        saveButton.text("Save event");
        saveButton.addClass("btn-lg");

        // Append button and desc to timeblock 
        tableRow2.append(saveButton);
        timeblockDesc.append(tableRow2);
    }

}

createTimeblocks();



    // Allow user to enter event when click on timeblock
     
    // Save event in local storage when save button clicked on individual timeblock

    // Persist events between refreshes of a page
