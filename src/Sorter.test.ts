import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

describe('Bubble Sorting Class', () => {
  it('Sorts an array of numbers', () => {
    const mock = new NumbersCollection([4, 2, 3, 6, -1, 0, 12]);
    const sorter = new Sorter(mock);
    sorter.sort();

    expect(mock.getCollection()).toEqual([-1, 0, 2, 3, 4, 6, 12]);
  });

  it('Sorts an array of strings', () => {
    const mock = new CharactersCollection('abcdXAF');
    const sorter = new Sorter(mock);
    sorter.sort();
    
    expect(mock.getCollection()).toEqual('aAbcdFX')
  })
});
