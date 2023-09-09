// 12===>18===>24===>25===>26===>27===>28===>29
/* 
 

*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let currentTail = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {}
}

const linkedList = new LinkedList();
console.log(linkedList);

linkedList.push(2);
linkedList.push(4);
console.log(linkedList);
