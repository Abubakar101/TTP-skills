// Question 3 -- getClosingParen(sentence, openingParenIndex):

// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

/*

*** Assuming that there are equal amount of pairs for both open and close parenthesis *** 
*/
function getClosingParen(sentence, openingParenIndex) {
	if (sentence[openingParenIndex] !== '(') return 'No open parentheses here!';

	let openParanCount = 0;

	for (let i = openingParenIndex, j = sentence.length; i < j; i++) {
		if (sentence[i] == '(') {
			openParanCount++;
		} else if (sentence[i] == ')') {
			openParanCount--;

			if (openParanCount === 0) {
				return i;
			} 
		}
	}
	
	return (openParanCount > 0) && "Missing parentheses";
	
}

getClosingParen(
	'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.',
	10
);

