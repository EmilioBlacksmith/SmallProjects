const fs = require("fs");

// Path to text file
const filePath = "./input/lines.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
	if (err) {
		console.error("Error reading the file:", err);
		return;
	}

	//print the content of the file
	let textToArray = data.split("\r\n");
	getTheTop(textToArray);
});

function getTheTop(lineArray) {
	let lineCounts = {};

	// count the occurrences of each line
	lineArray.forEach((line) => {
		lineCounts[line] = (lineCounts[line] || 0) + 1;
	});

	// Sort the lines based on their counts in descending order
	let sortedLines = Object.keys(lineCounts).sort(
		(a, b) => lineCounts[b] - lineCounts[a]
	);

	// Get the top 10 lines
	let top10Lines = sortedLines.slice(0, 10);

	console.log("Top 10 most repeated lines:");
	top10Lines.forEach((line) => {
		console.log(`${line} : ${lineCounts[line]} times`);
	});
}
