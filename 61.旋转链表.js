/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  if (k === 0) return head;
  let points = [];
  let p = head;
  let len = 0;
  while (p) {
    points.push(p);
    p = p.next;
    len++;
  }
  if (k >= len) return rotateRight(head, k % len);
  else {
    points[len - k - 1].next = null;
    points[len - 1].next = head;
    return points[len - k];
  }
};
// @lc code=end

