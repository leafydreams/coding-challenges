// Matchstick Houses
// edabit challenge by Ruud Peter Boelens

// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Matchstick Houses, Steps 1, 2 and 3

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 
// See step 1, 2 and 3 in the image above.

// Examples
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

function matchHouses(step) {
	let matchsticks = 6;
	let multiplier = (step - 1) * 5;
	if (step === 0) {
		return 0;
	}
	if (step === 1){
		return matchsticks;
	}
	return matchsticks + multiplier;
	
}