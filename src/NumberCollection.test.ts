import { NumbersCollection } from './NumbersCollection';

describe('NumbersCollection class', () => {
  const NUMBERS = [3, 6, 2, -1, -10, 88];

  let data: NumbersCollection;

  beforeEach(() => {
    data = new NumbersCollection(NUMBERS);
  });

  it('Returns length of the array of numbers those it contains', () => {
    expect(data.length).toBe(6);
  });

  it('Returns the array of numbers', () => {
    expect(data.getCollection()).toEqual(NUMBERS);
  });

  it('Compares numbers', () => {
    expect(data.compare(0, 1)).toBe(false);
  });

  it('Changes numbers order', () => {
    data.swap(0, 1);

    expect(data.getCollection()[0]).toBe(6);
    expect(data.getCollection()[1]).toBe(3);
  })
});
