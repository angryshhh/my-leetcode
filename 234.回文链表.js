/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  let backwardHead = new ListNode(head.val);
  let node = head.next;
  let count = 1;
  while (node) {
    backwardHead = new ListNode(node.val, backwardHead);
    node = node.next;
    count++;
  }

  while (backwardHead.val === head.val && count > 1) {
    backwardHead = backwardHead.next;
    head = head.next;
    count -= 2;
  }
  return count < 2;
};
// @lc code=end

