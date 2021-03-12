class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;
  tail: Node | null = null;

  get length(): number {
    let node = this.head;
    let length = 1;
    
    if (!node) {
      return 0;
    }

    while (node.next) {
      node = node.next;
      length++;
    }

    return length;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const temp = leftNode.data;

    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  toArray(): number[] {
    const data = [];

    let node = this.head;

    while (node) {
      data.push(node.data);
      node = node.next;
    }

    return data;
  }
}