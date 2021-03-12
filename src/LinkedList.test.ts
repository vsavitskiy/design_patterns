import { LinkedList } from './LinkedList';

describe('LinkedList class', () => {
  const NUMBERS = [3, 6, 2, -1, -10, 88];

  let data: LinkedList;

  beforeEach(() => {
    data = new LinkedList();

    NUMBERS.forEach(v => data.add(v));
  });

  it('Returns length of the linked list', () => {
    expect(data.length).toBe(6);
  });

  it('Returns the array of numbers', () => {
    expect(data.toArray()).toEqual(NUMBERS);
  });

  it('Compares numbers', () => {
    expect(data.compare(0, 1)).toBe(false);
  });

  it('Swaps order', () => {
    data.swap(0, 1);

    expect(data.at(0).data).toBe(6);
    expect(data.at(1).data).toBe(3);
  })
});
