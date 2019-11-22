/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let beforeM = new ListNode(0);
  beforeM.next = head;
  head = beforeM;
  let mP = head.next;
  let nP = head.next;
  for (let i = 1; i < n; i++) {
    if (i < m) {
      beforeM = beforeM.next;
      mP = mP.next;
      nP = nP.next;
    } else if (nP.next) {
      beforeM.next = nP.next;
      nP.next = nP.next.next;
      beforeM.next.next = mP;
      mP = beforeM.next;
    }
  }
  return head.next;
};
// @lc code=end

