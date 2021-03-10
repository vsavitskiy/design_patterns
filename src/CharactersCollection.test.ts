import { CharactersCollection } from './CharactersCollection';

describe('CharactersCollection class', () => {
  const TEST_STRING = 'teststring';

  let data: CharactersCollection;

  beforeEach(() => {
    data = new CharactersCollection(TEST_STRING);
  });

  it('Returns length of the string that it contains', () => {
    expect(data.length).toBe(10);
  });

  it('Returns data', () => {
    expect(data.getCollection()).toEqual(TEST_STRING);
  });

  it('Compares characters', () => {
    expect(data.compare(0, 1)).toBe(true);
  });

  it('Changes characters order', () => {
    data.swap(0, 1);

    expect(data.getCollection()[0]).toBe('e');
    expect(data.getCollection()[1]).toBe('t');
  })
});
