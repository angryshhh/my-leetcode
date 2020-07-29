/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (57.11%)
 * Likes:    692
 * Dislikes: 0
 * Total Accepted:    135.6K
 * Total Submissions: 233.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // let result = new ListNode(0);
  // let list = result;
  
  // while (l1 || l2) {
  //   if (!l1) {
  //     list.next = l2;
  //     l2 = null;
  //   } else if(!l2) {
  //     list.next = l1;
  //     l1 = null;
  //   } else {
  //     if (l1.val < l2.val) {
  //       list.next = l1;
  //       l1 = l1.next;
  //       list = list.next;
  //     } else {
  //       list.next = l2;
  //       l2 = l2.next;
  //       list = list.next;
  //     }
  //   }
  // }
  // return result.next;
  let result = new ListNode(0);
  let p = result;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
    p.next = null;
  }
  if (l1) {
    p.next = l1;
  } else {
    p.next = l2;
  }
  return result.next;
};
// @lc code=end

