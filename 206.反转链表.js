/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
  // Your runtime beats 98.99 % of javascript submissions
  // Your memory usage beats 77.52 % of javascript submissions (34.7 MB)
  let firstNode = head;
  let node = head;
  while (node) {
    if (node !== firstNode) {
      firstNode.next = node.next;
      node.next = head;
      head = node;
    }
    node = firstNode.next;
  }
  return head;
};
// @lc code=end

