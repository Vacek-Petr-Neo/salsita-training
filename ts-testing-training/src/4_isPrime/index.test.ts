import {isPrime} from './index';

describe('isPrime', () => {
  it('should return false if passed -10', () => {
    expect(isPrime(-10)).toStrictEqual(false);
  });
  it('should return false if passed 0', () => {
    expect(isPrime(0)).toStrictEqual(false);
  });
  it('should return false if passed 1', () => {
    expect(isPrime(1)).toStrictEqual(false);
  });
  it('should return false for non-integer like PI', () => {
    expect(isPrime(Math.PI)).toStrictEqual(false);
  });
  it('should return true if passed 2', () => {
    expect(isPrime(2)).toStrictEqual(true);
  });
  it('should return true if passed 3', () => {
    expect(isPrime(3)).toStrictEqual(true);
  });
  it('should return false if passed 4', () => {
    expect(isPrime(4)).toStrictEqual(false);
  });
  it('should return false if passed 8', () => {
    expect(isPrime(8)).toStrictEqual(false);
  });
  it('should return false for NaN', () => {
    expect(isPrime(NaN)).toStrictEqual(false);
  });
  it('should return false for infinity', () => {
    expect(isPrime(Infinity)).toStrictEqual(false);
  });
  it('should return false for -infinity', () => {
    console.log(-Infinity);
    expect(isPrime(-Infinity)).toStrictEqual(false);
  });
});
