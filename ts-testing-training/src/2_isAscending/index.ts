// === PROMPT: ===
// Make a function receives an array of integers as input. Your task
// is to determine whether the numbers are in ascending order. An array is said
// to be in ascending order if there are no two adjacent integers where the left
// integer exceeds the right integer in value.
//
// Example:
// isAscending([]); // returns true
// isAscending([9]); // returns true
// isAscending([1, 1]); // returns true
// isAscending([1, 2, 4, 7, 19]); // returns true
// isAscending([1, 6, 2]); // returns false
// isAscending([9, 8, 7]); // returns false
export const isAscending = (input: number[]) : boolean => {
  for (let i = 1; i < input.length; i++) {
    if (input[i-1] > input[i]) return false;
  }
  return true;
};
