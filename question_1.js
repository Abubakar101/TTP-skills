// Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b, and an integer target value v.

// Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v.

// Return true if such a pair exists, otherwise return false.

// const sumOfTwo = (a, b, v) => a + b === v;

/* 

  ***** Assuming that they are unsorted, repeated values, and the array sizes are not equal. *****
*/
function sumOfTwo(a, b, v) {
	const arr = [...new Set(a), ...new Set(b)];
	
	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[i] + arr[j] === v) {
				console.log(arr[i], arr[j]);
				return true;
			}
		}
	}

	return false;
}
sumOfTwo([10, 10, 2, 2, 3, 21], [0, 12, 33, 4, 2, 0, 10], 4);
