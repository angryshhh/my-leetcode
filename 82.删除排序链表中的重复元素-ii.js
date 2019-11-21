/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
  let result = new ListNode(0);
  let p = result;
  while (head) {
    if (head.next && head.next.val === head.val) {
      let headVal = head.val;
      while (head && head.val === headVal) head = head.next;
    } else {
      p.next = new ListNode(head.val);
      head = head.next;
      p = p.next;
    }
  }
  return result.next;
};
// @lc code=end

