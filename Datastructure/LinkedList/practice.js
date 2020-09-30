// Java does have a linkedList, JavaScript don't, So we need to make it

// Formula - 

// Prepend -> O(1) -> Find the Element Beginning of the Array
// Append  -> O(1) -> Find the Element End of the Array
// Lookup  -> O(n) -> Search for a Element in the Linked list
// Insert  -> O(n) -> Insert a Element in the Linked list
// Delete  -> O(n) -> Delete a Element from the List 

// 10->5->16     (10 is head and 16 is tail)

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

// 2 - >head -> tail

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value : value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if(index >= value) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        let leader = this.traverSe(index-1);
        let nextNode = leader.next;
        leader.next = newNode;
        newNode.next = nextNode;
        this.length++;
        this.printList();
    }
    traverSe(index) {
        let counter = 0;
        let currentNode = this.head;
        while(index!==counter) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        if(index >= this.length) {
            return "Invalid Input!";
        } 
        let leader = this.traverSe(index-1);
        let unwanted = leader.next;
        leader.next = unwanted.next;
        this.length--;
        this.printList();
    }
    reverse() {
      if(!this.head.next) {
          return this.head;
      }
      this.tail = this.head;
      let first = this.head;
      let second = first.next;
      while(second) {
          let temp = second.next;
          second.next = first;
          first = second;
          second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this.printList();
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode!==null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

var myLinkedList = new LinkedList(10);
myLinkedList.prepend(5);
myLinkedList.prepend(52);
myLinkedList.prepend(22);
myLinkedList.append(9);
myLinkedList.insert(200, 99); //If the index location more than length it gonna insert last
myLinkedList.insert(2, 19);
console.log(JSON.stringify(myLinkedList));
console.log("Array--------------------->");
console.log(myLinkedList.printList());
myLinkedList.remove(2);
myLinkedList.remove(5);
console.log(myLinkedList.printList());
console.log("Reverse LinkedList--------------------->");
myLinkedList.reverse();
console.log(JSON.stringify(myLinkedList));
