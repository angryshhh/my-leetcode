/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let p = new ListNode(0);
  p.next = head;
  let beforeHead = p;
  while (p && p.next) {
    if (p.next.val === val) p.next = p.next.next;
    else p = p.next;
  }
  return beforeHead.next;
};
// @lc code=end

