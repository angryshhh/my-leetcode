/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // Your runtime beats 87.08 % of javascript submissions
  // Your memory usage beats 7.85 % of javascript submissions (44.6 MB)
  // while (headA) {
  //   headA.inA = true;
  //   headA = headA.next;
  // }
  // while (headB) {
  //   if (headB.inA) return headB;
  //   headB = headB.next;
  // }
  // return null;
  let pA = headA, pB = headB;
  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  return pA;
};
// @lc code=end

