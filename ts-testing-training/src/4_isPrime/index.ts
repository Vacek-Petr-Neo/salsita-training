// === PROMPT: ===
// Make a function that takes a number and returns true if it's prime, and false
// if it's not.  It should return false for 0.

export const isPrime = (input: number): boolean => {
  if (input < 2 || !Number.isInteger(input)) return false;
  const boundary = input / 2;
  for (let i = 2; i <= boundary; i++) {
    if (input % i === 0) return false;
  }
  return true;
};
