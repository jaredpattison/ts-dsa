class ListNode<T> {
  val: T | null;
  next: ListNode<T> | null;

  constructor(val?: T | null, next?: ListNode<T> | null) {
    this.val = (val === undefined ? null : val)
    this.next = (next === undefined ? null : next)
  }
}

// Example usage:
// const numbers = [10, 20, 30, 40, 50];
// const linkedList = new SinglyLinkedList<number>();
// linkedList.buildFromArray(numbers);
// linkedList.printList();  // Output: 10 -> 20 -> 30 -> 40 -> 50
// linkedList.append(4)
class SinglyLinkedList<T> {
  head!: ListNode<T> | null;

    constructor(head?: ListNode<T> | T[] | null) {
      if (head instanceof ListNode) {
        this.head = head;
      } else if (Array.isArray(head)) {
        this.buildFromArray(head)
      }
    
  }

  append(val: T): void {
    if (!this.head) {
      this.head = new ListNode(val);
      return;
    }
    
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new ListNode(val);
  }

  // Build linked list from array
  buildFromArray(arr: T[]): void {
    if (arr.length === 0) {
      this.head = null;
      return;
    }

    this.head = new ListNode<T>(arr[0]);
    let current = this.head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
  }

  // Convert list to array
  convertToArray(head: ListNode<T> | null): T[] {
    const res: T[] = [];
    let current = head;

    while (current) {
      if (current.val !== null) res.push(current.val);
      current = current.next;
    }
    
    return res;
  }

  // Helper function to print linked list
  printList(): void {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

export { ListNode, SinglyLinkedList };
