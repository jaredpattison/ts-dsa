/* 2. Add Two Numbers
Solved
Medium
Topics
premium lock icon
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 
Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros. */

import { SinglyLinkedList, ListNode } from "../lib/singly-linked-list";


// Definition for singly-linked list.


const addTwoNumbers = (l1: ListNode<number> | null, l2: ListNode<number> | null): ListNode<number> | null => {
  const dummy = new ListNode(0);
  let carry = 0, curr = dummy;

  while (l1 || l2 || carry) {
    let val1 = l1?.val ?? 0;
    let val2 = l2?.val ?? 0;
    let sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}

describe('Test addTwoNumbers', () => {
  test('Case 1: l1 = [2,4,3], l2 = [5,6,4]', () => {
    const l1 = new SinglyLinkedList([2, 4, 3]);
    const l2 = new SinglyLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1.head, l2.head);
    expect(new SinglyLinkedList(result).convertToArray(result)).toStrictEqual([7, 0, 8]);
  });
  test('Case 2: l1 = [0], l2 = [0]', () => {
    const l1 = new SinglyLinkedList([0]);
    const l2 = new SinglyLinkedList([0]);
    const result = addTwoNumbers(l1.head, l2.head);
    expect(new SinglyLinkedList(result).convertToArray(result)).toStrictEqual([0]);
  });
  test('Case 3: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', () => {
    const l1 = new SinglyLinkedList([9,9,9,9,9,9,9]);
    const l2 = new SinglyLinkedList([9,9,9,9]);
    const result = addTwoNumbers(l1.head, l2.head);
    expect(new SinglyLinkedList(result).convertToArray(result)).toStrictEqual([8,9,9,9,0,0,0,1]);
  });
});
