/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (54.34%)
 * Likes:    294
 * Dislikes: 0
 * Total Accepted:    26.6K
 * Total Submissions: 48.4K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 示例 :
 * 
 * 给定这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 说明 :
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || k === 1) return head;
  let i = 1;
  let p = head;
  while (i < k && p) {
    p = p.next;
    i++;
  }
  if (i !== k || !p) return head;
  i = 1;
  p = head.next;
  let newHead = head;
  while (i < k) {
    head.next = p.next;
    p.next = newHead;
    newHead = p;
    p = head.next;
    i++;
  }
  head.next = reverseKGroup(head.next, k);
  return newHead;
};
// 下面逻辑是把第一个和第k个交换。。。弄错了
// var reverseKGroup = function(head, k) {
//   if (!head || k === 1) return head;
//   if (k === 2) {
//     let p = head.next;
//     if (!p) return head;
//     head.next = reverseKGroup(p.next, k);
//     p.next = head;
//     return p;
//   }
//   let headNext = head.next;
//   let beforeEnd = head;
//   let i = 1;
//   while (i < k - 1 && beforeEnd) {
//     beforeEnd = beforeEnd.next;
//     i++;
//   }
//   if (i !== k - 1 || !beforeEnd || !beforeEnd.next) return head;
//   let end = beforeEnd.next;
//   head.next = reverseKGroup(end.next, k);
//   beforeEnd.next = head;
//   end.next = headNext;
//   return end;
// };
// @lc code=end

