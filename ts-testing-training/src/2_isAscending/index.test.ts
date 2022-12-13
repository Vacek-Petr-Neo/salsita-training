import {isAscending} from './index';

describe('isAscending', () => {
  it('should be true for []', () => {
    expect(isAscending([])).toStrictEqual(true);
  });
  it('should be true for [9]', () => {
    expect(isAscending([9])).toStrictEqual(true);
  });
  it('should be true for [1, 1]', () => {
    expect(isAscending([1, 1])).toStrictEqual(true);
  });
  it('should be true for [1, 2, 4, 7, 19]', () => {
    expect(isAscending([1, 2, 4, 7, 19])).toStrictEqual(true);
  });
  it('should be false for [1, 6, 2]', () => {
    expect(isAscending([1, 6, 2])).toStrictEqual(false);
  });
  it('should be false for [9, 8, 7]', () => {
    expect(isAscending([9, 8, 7])).toStrictEqual(false);
  });
});
