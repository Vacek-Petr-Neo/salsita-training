import {fuzzySearch} from './index';

describe('fuzzySearch', () => {
  it('should return ["apple", "grape"] for ("a", ["apple", "grape"])', () => {
    const result = fuzzySearch('a', ['apple', 'grape']);
    expect(result).toHaveLength(2);
    expect(result).toContain('apple');
    expect(result).toContain('grape');
  });
  it('should return ["apple", "grape"] for ("ap", ["apple", "grape"])', () => {
    const result = fuzzySearch('ap', ['apple', 'grape']);
    expect(result).toHaveLength(2);
    expect(result).toContain('apple');
    expect(result).toContain('grape');
  });
  it('should return ["apple"] for ("al", ["apple", "grape"])', () => {
    const result = fuzzySearch('al', ['apple', 'grape']);
    expect(result).toHaveLength(1);
    expect(result).toContain('apple');
  });
  it('should return ["apple", "grape"] for ("", ["apple", "grape"])', () => {
    const result = fuzzySearch('', ['apple', 'grape']);
    expect(result).toHaveLength(2);
    expect(result).toContain('apple');
    expect(result).toContain('grape');
  });
  it('should return [] for ("abc", [])', () => {
    const result = fuzzySearch('abc', []);
    expect(result).toHaveLength(0);
  });
});
