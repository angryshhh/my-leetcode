/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  // while (head) {
  //   head.has = true;
  //   if (head.next && head.next.has) {
  //     return true;
  //   }
  //   head = head.next;
  // }
  // return false;
  if (!head) return false;
  let slow = head, fast = head.next;
  while (fast) {
    if (fast === slow)
      return true;

    fast = fast.next;
    if (!fast)
      return false;
    fast = fast.next;
    slow = slow.next;
  }
  return false;
};
// @lc code=end

