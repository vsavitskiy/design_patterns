import { Sorter } from './src/Sorter';
import { LinkedList } from './src/LinkedList';

const linkedList = new LinkedList();
const sorter = new Sorter(linkedList);

linkedList.add(3231);
linkedList.add(1);
linkedList.add(32);
linkedList.add(31);

sorter.sort();
linkedList.print();
