/* 19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz */

import { ListNode, SinglyLinkedList } from "../lib/singly-linked-list";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const removeNthFromEnd = (head: ListNode<number> | null, n: number): ListNode<number> | null => {
    let res = new ListNode<number>(0, head);
    let dummy: ListNode<number> = res;

    // Move head pointer n steps ahead
    for (let i = 0; i < n; i++) {
        head = head!.next;
    }

    // Move both pointers until head reaches the end
    while (head) {
        head = head.next;
        dummy = dummy.next!; // Safe: dummy.next exists since we moved head n steps ahead
    }

    // Remove the nth node from the end
    dummy.next = dummy.next!.next;

    return res.next;
};

describe('Test removeNthFromEnd', () => {
  test('Case 1', () => {
    const head = new SinglyLinkedList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head.head, 2);
    expect(new SinglyLinkedList(result).convertToArray(result)).toStrictEqual([1, 2, 3, 5]);
  });
  test('Case 2', () => {
    const head = new SinglyLinkedList([1]);
    const result = removeNthFromEnd(head.head, 1);
    expect(new SinglyLinkedList(result).convertToArray(result)).toStrictEqual([]);
  });
  test('Case 3', () => {
    const head = new SinglyLinkedList([1, 2]);
    const result = removeNthFromEnd(head.head, 1);
    expect(new SinglyLinkedList(result).convertToArray(result)).toStrictEqual([1]);
  });
});