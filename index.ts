import { Sorter } from './src/Sorter';
import { NumbersCollection } from './src/NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection);
