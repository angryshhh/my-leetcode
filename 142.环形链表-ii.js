/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  // while (head) {
  //   head.has = true;
  //   if (head.next && head.next.has) return head.next;
  //   head = head.next;
  // }
  // return null;

  if (!head || !head.next) return null;
  let slow = head.next, fast = head.next.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return null;

    fast = fast.next.next;
    slow = slow.next;
  }

  // lets say the enter point is at n
  // and they meet when the slow node
  // goes b further after the enter point
  // so the slow goes n + b far
  // and fast goes 2n + 2b far
  // if the slow node goes more n
  // that is 2n + b far, which is b less than fast node
  // so that will be the enter point
  let newHead = head;
  while (newHead !== slow) {
    newHead = newHead.next;
    slow = slow.next;
  }
  return newHead;
};
// @lc code=end

