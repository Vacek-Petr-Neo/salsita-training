import {isEven} from './index';

describe('isEven', () => {
  it('should return true if passed 0', () => {
    expect(isEven(0)).toStrictEqual(true);
  });
  it('should return false if passed 1', () => {
    expect(isEven(1)).toStrictEqual(false);
  });
});
