// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runUFO);
// form.on("submit",runUFO);

function runUFO(){
  var inputdate = d3.select("#datetime");
	var filteredData = tableData.filter(sighting => sighting.datetime === inputdate.property("value"));
	filteredData.forEach((observation) => {
  	var row = tbody.append("tr");
  	Object.values(observation).forEach((value) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

	// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
}

function intro(){
	tableData.forEach((observation) => {
 	var row = tbody.append("tr");
  	Object.values(observation).forEach((value) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
}

intro();

