// === PROMPT: ===
// Write a function that takes a string and an integer n as parameters and
// returns a list of all words that are longer than n.
//
// https://www.codewars.com/kata/5697fb83f41965761f000052
export const wordLengthFilter = (input: string, maxLen: number) : string[] => {
  return input.split(' ').filter(
      (value: string) => value.length > maxLen,
  );
};
