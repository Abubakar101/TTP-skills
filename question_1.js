// Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b, and an integer target value v.

// Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v.

// Return true if such a pair exists, otherwise return false.

// const sumOfTwo = (a, b, v) => a + b === v;

/* 

  ***** Assuming that they are unsorted, repeated values, and the array sizes are not equal. *****
*/
function sumOfTwo(arr1, arr2, target) {
	const obj1 = {},
		obj2 = {};

	let count = 0;

	while (arr1[count] || arr2[count]) {
		if (arr1[count]) {
			obj1[arr1[count]] = true;
			if (obj2[target - arr1[count]]) {
				return [target - arr1[count], arr1[count]];
			}
		}

		if (arr2[count]) {
			obj2[arr2[count]] = true;
			if (obj1[target - arr2[count]]) {
				return [target - arr2[count], arr2[count]];
			}
		}

		count++;
	}
	return false;
}

sumOfTwo([10, 10, 7, 2, 2, 10, 21], [2, 2, 7, 1], 17);

