// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

function possibleBonus(a, b) 
	// takes position a and position b 
	const aux = (b - a);
	// returns a boolean representation of whether it's possible to earn a bonus on any dice roll
	return((aux <= 6) && (aux > 0));	
}
