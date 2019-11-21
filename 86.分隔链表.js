/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let lil = new ListNode(0), big = new ListNode(0);
  let p1 = lil, p2 = big;
  while (head) {
    if (head.val < x) {
      p1.next = new ListNode(head.val);
      p1 = p1.next;
    } else {
      p2.next = new ListNode(head.val);
      p2 = p2.next;
    }
    head = head.next;
  }

  p1.next = big.next;
  return lil.next;
};
// @lc code=end

