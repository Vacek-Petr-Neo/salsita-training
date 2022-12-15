// === PROMPT: ===
// Write a function that takes a search term and an array of strings.  The
// function should return all the elements in the array that fuzzy match the
// search term.
// A string fuzzy matches the search term if it contains the same letters as the
// search term in the same order, even if there are gaps between the letters
// For example:
// - fuzzySearch('a', ['apple', 'grape']) // return ['apple', 'grape']
//   - because 'a' is in 'apple' and 'grape'
// - fuzzySearch('ap', ['apple', 'grape']) // return ['apple', 'grape']
//   - because 'ap' is both 'apple' and 'grape'
// - fuzzySearch('al', ['apple', 'grape']) // return ['apple']
//   - because only apple contains the letters 'a' and 'l' in that order, even
//     though there are gaps
export const fuzzySearch = (pattern: string, samples: string[]) : string[] => {
  if (pattern === '') return samples;
  let patternIndex : number;
  let i : number;
  return samples.filter((sample: string) => (sample.length >= pattern.length))
      .filter((sample: string) => {
        patternIndex = 0;
        for (i = 0; i < sample.length; i++) {
          if (pattern[patternIndex] === sample[i]) {
            patternIndex++;
            if (patternIndex === pattern.length) return true;
          }
        }
        return false;
      });
};
