/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head || !head.next) return head;
  let oddTail = head;
  let evenHead = head.next, evenTail = head.next;
  while (evenTail && evenTail.next) {
    let oddNode = evenTail.next;
    evenTail.next = oddNode.next;
    evenTail = evenTail.next;
    oddNode.next = evenHead;
    oddTail.next = oddNode;
    oddTail = oddTail.next;
  }
  return head;
};
// @lc code=end

