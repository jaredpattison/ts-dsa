// @ts-ignore
import { SinglyLinkedList } from "../../lib/singly-linked-list.ts";

const list = new SinglyLinkedList([2, 4, 6, 8, 10]);

const traverse = <T>(ll: SinglyLinkedList<T>): void => {
  let current = ll.head;
  while (current?.next) {
    console.log(current.val);
    current = current.next;
  }
  console.log(current?.val);
}

traverse(list);