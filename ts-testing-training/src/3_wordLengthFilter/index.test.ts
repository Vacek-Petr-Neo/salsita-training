import {wordLengthFilter} from './index';

describe('wordLengthFilter', () => {
  it('should work for empty string', () => {
    expect(wordLengthFilter('', 4)).toHaveLength(0);
  });
  it('should return empty array for a massive maxLen param', () => {
    const result = wordLengthFilter(
        'The quick brown fox jumps over the lazy dog',
        Number.MAX_SAFE_INTEGER,
    );
    expect(result).toHaveLength(0);
  });
  it('should work for a simple example', () => {
    const result = wordLengthFilter(
        'The quick brown fox jumps over the lazy dog',
        4,
    );
    expect(result).toHaveLength(3);
    expect(result).toContain('quick');
    expect(result).toContain('brown');
    expect(result).toContain('jumps');
  });
  it('should return array for all words for maxLen 0', () => {
    const result = wordLengthFilter(
        'The quick brown fox jumps over the lazy dog',
        0,
    );
    expect(result).toHaveLength(9);
    expect(result).toContain('The');
    expect(result).toContain('quick');
    expect(result).toContain('brown');
    expect(result).toContain('fox');
    expect(result).toContain('jumps');
    expect(result).toContain('over');
    expect(result).toContain('the');
    expect(result).toContain('lazy');
    expect(result).toContain('dog');
  });
});
