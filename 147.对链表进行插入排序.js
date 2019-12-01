/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
  if (!head || !head.next) return head;
  let result = new ListNode(0);
  result.next = head;
  let p = result.next, beforeP = result;
  while (p) {
    let firstBigger = result.next, beforeFirstBigger = result;
    while (firstBigger && firstBigger.val < p.val) {
      beforeFirstBigger = firstBigger;
      firstBigger = firstBigger.next;
    }
    if (firstBigger !== p) {
      beforeP.next = p.next;
      p.next = firstBigger;
      beforeFirstBigger.next = p;
      p = beforeP.next;
    } else {
      beforeP = p;p
      p = p.next;
    }
  }
  return result.next;
};
// @lc code=end

