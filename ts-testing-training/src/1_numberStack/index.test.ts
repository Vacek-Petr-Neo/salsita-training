import {NumberStack} from './index';

describe('NumberStack', () => {
  let testSubject: NumberStack;
  beforeEach(() => {
    testSubject = new NumberStack();
  });

  it('should not return a value after push call', () => {
    expect(testSubject.push(10)).toBe(undefined);
  });

  it('should return the last pushed value on pop() call', () => {
    testSubject.push(10);
    testSubject.push(5.5);

    expect(testSubject.pop()).toStrictEqual(5.5);
  });

  it('should return the correct value after subsequent pop() calls', () => {
    testSubject.push(10);
    testSubject.push(5.5);

    testSubject.pop();
    expect(testSubject.pop()).toStrictEqual(10);
  });

  it('should return the contents by accessing the contents property', () => {
    testSubject.push(10);
    testSubject.push(5.5);
    const result = testSubject.contents;
    expect(result.length).toStrictEqual(2);
  });

  it('should return the last inserted value on top', () => {
    testSubject.push(10);
    testSubject.push(5.5);

    expect(testSubject.top).toStrictEqual(5.5);
  });

  it('should return the same value after subsequent top() calls', () => {
    testSubject.push(10);
    testSubject.push(5.5);

    expect(testSubject.top).toStrictEqual(testSubject.top);
  });
});
