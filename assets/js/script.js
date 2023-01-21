// To implement
    // Display current day at top of page when user opens planner


// Initialise javascript variables
var currentDay = moment().format("dddd D MMMM");
var timeblockContainer = $("container");


var setDate = function () {
    // Set text of current day to moment value
    $("#currentDay").text(currentDay);      
}
    // Present individual timeblocks for 9/5 

var createTimeblocks = function () { 
    
}
var timeOfDay = [9,10,11,12,1,2,3,4,5]

    // Create table to hold all the rows of timeblocks
for (var i = 0; i <timeOfDay.length; i++){
    var newTimeblock = $("<td>");
}



    // Color-code timeblock based on current time - 
        // e.g grey for past, red for current & green for future

    // Allow user to enter event when click on timeblock
     
    // Save event in local storage when save button clicked on individual timeblock

    // Persist events between refreshes of a page
