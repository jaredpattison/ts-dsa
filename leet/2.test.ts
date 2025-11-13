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


const addTwoNumbers = (l1: ListNode<number> | null, l2: ListNode<number> | null): number[] | null => {
  const dummy = new ListNode(0);
  let carry = 0, curr = dummy;

  while (l1 || l2 || carry) {
    let val1 = l1?.val ? l1.val : 0;
    let val2 = l2?.val ? l2.val : 0;
    let sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return new SinglyLinkedList(dummy.next).convertToArray(dummy.next);
}

let l1a = new SinglyLinkedList([2, 4, 3]);
let l1b = new SinglyLinkedList([5, 6, 4]);
let l2 = new SinglyLinkedList([0]);
let l3a = new SinglyLinkedList([9,9,9,9,9,9,9]);
let l3b = new SinglyLinkedList([9,9,9,9]);

describe('Test addTwoNumbers', () => {
  test('It should return expected array', () => {
    expect(addTwoNumbers(l1a.head, l1b.head)).toStrictEqual([7, 0, 8]);
  });
  test('It should return expected array', () => {
    expect(addTwoNumbers(l2.head, l2.head)).toStrictEqual([0]);
  });
  test('It should return expected array', () => {
    expect(addTwoNumbers(l3a.head, l3b.head)).toStrictEqual([8,9,9,9,0,0,0,1]);
  });
});
