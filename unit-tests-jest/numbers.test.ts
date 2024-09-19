import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const values = [1, 2, 3, 4, 5];
    const result = evenNumbers(values);
    expect(result).toEqual([2, 4]);
  });

  it('has no even numbers', () => {
    const values = [1, 3, 5];
    const result = evenNumbers(values);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('formats to dollars and cents', () => {
    const value = 150;
    const result = toDollars(value);
    expect(result).toBe('$1.50');
  });

  it('is less than a dollar', () => {
    const value = 75;
    const result = toDollars(value);
    expect(result).toBe('$0.75');
  });
});

describe('divideBy', () => {
  it('divides by a given number', () => {
    const values = [2, 4, 6, 8, 10];
    const number = 2;
    const result = divideBy(values, number);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('works with odd numbers', () => {
    const values = [3, 6, 9, 12, 15];
    const number = 3;
    const result = divideBy(values, number);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('multiplyBy', () => {
  it('multiplies by a given number', () => {
    const values: Record<string, number> = {
      one: 1,
      two: 2,
      three: 3,
    };
    const number = 2;
    const result = multiplyBy(values, number);
    expect(result).toEqual({
      one: 2,
      two: 4,
      three: 6,
    } as Record<string, number>);
  });

  it('works with odd numbers', () => {
    const values: Record<string, number> = {
      one: 1,
      two: 2,
      three: 3,
    };
    const number = 3;
    const result = multiplyBy(values, number);
    expect(result).toEqual({
      one: 3,
      two: 6,
      three: 9,
    } as Record<string, number>);
  });
});
